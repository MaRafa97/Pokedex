import React from 'react'
import {View, Text, FlatList, StyleSheet, Platform} from "react-native"
import PokemonCard from './PokemonCard';
import { ActivityIndicator } from 'react-native-web';

export default function PokemonList(props) {
    const {pokemons, loadPokemons, isNext } = props;
    // platform.OS --> Obtener el SO del dispositivo
    const loadMore = () => {
      //console.log("Loading more");
      loadPokemons();
    };

  return (
    <FlatList
    data  = {pokemons}
    numColumns={2}
    showsVerticalScrollIndicator={true}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({item}) => <PokemonCard pokemon = {item}/>}
    contentContainerStyle= {styles.flatListContentContainer}
    onEndReached={loadMore}
    onEndReachedThreshold={0.1}
    ListFooterComponent={ isNext && (
      <ActivityIndicator
         size="large"
         style={styles.spinner} />)
    }
    />
  );
}


const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS == "android" ? 0 : 0,
    },
    spinner: {
      marginTop: 20,
      marginBottom: Platform.OS == "android" ? 90 : 60,
    }
})