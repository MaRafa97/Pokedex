import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import {addPokemonFavoriteApi, getPokemonFavoriteApi, isFavoriteApi,removePokemonApi} from '../../api/favorite'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Favorite(props) { 

    const {id} = props;

    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadCheck, setReloadCheck] = useState(false);

    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    useEffect(() => {
      (async () => {
        try {
            const response = await isFavoriteApi(id);
            setIsFavorite(response);
        } catch (error){
            setIsFavorite(false);
        }
      })();
    }, [id, reloadCheck]);
  
    const onReloadCheckFavorite = () => {
        setReloadCheck(prev => !prev);
    }


    const addFavorite = async () => {

        try {
            //console.log("añadiendo "+ id);
            await addPokemonFavoriteApi(id);
            onReloadCheckFavorite();
        } catch (error) {
            //console.log(error);
        }
    };

    const removeFavorite = async () => {
        try {
            //console.log("Eliminar "+ id);
            await removePokemonApi(id);
            onReloadCheckFavorite();
        } catch (error) {
            //console.log(error);
        }
        
    }

    return (
        <Icon name="heart" color="#fff" size={20} onPress={isFavorite ? removeFavorite : addFavorite} style={{ marginRight:20}} />
    )
}
