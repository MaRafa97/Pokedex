import React, {useState, useEffect} from "react";
import { Text, SafeAreaView } from "react-native";
import {getPokemonsApi, getPokemonDetailsByUrlApi} from "../api/pokemon"
import PokemonList from "../components/PokemonList";

export default function Pokedex () {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    ////console.log("Pokemons--> ", pokemons);
    useEffect(() => {
        (async() => {
            await loadPokemons();
        })();

    }, [] );

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi(nextUrl);
            //console.log(response);
            //console.log("response.next:" + response.next)
            setNextUrl(response.next);
            const pokemonsArray = [];
            
            for await (const pokemon of response.results)
            {
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
                ////console.log(pokemonDetails);
               
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default
                })
            }

            setPokemons([...pokemons, ...pokemonsArray]);
            
        } catch (error) {
            console.error(error);
        }

    }


    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNextUrl={nextUrl}/>
        </SafeAreaView>
    )
}