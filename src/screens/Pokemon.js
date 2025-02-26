import React, {useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"
import {getPokemonDetailsApi} from "../api/pokemon"
import Header from "../components/Pokemon/Header"
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
import Favorite from '../components/Pokemon/Favorite'
import useAuth from '../hooks/useAuth'

export default function Pokemon(props) {
  const {navigation, route: {params}} = props;
  ////console.log("Pokemon screen props ");
  ////console.log(props);
  ////console.log(route);

  const [pokemon, setPokemon] = useState(null);
  ////console.log(params.id);

  const { auth } = useAuth();
//console.log("auth " + auth);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <Favorite id = {pokemon?.id} /> : null), 
      headerLeft: () => <Icon name="arrow-left" color="#fff" size={20} style={{marginLeft: 20}} onPress={navigation.goBack} />})
  }, [navigation, params, pokemon]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        //console.log(response);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  },[params.id, navigation]);

  if(!pokemon) return null;


  return (
    <ScrollView>
        <Header name={pokemon.name} order={pokemon.order} image={pokemon.sprites.other["official-artwork"].front_default} type={pokemon.types[0].type.name}/>
        <Type types={pokemon.types}/>
        <Stats stats={pokemon.stats}/>
    </ScrollView>
  )
}
