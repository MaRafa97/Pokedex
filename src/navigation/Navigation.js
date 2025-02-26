import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-vector-icons/FontAwesome5"
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'
import AccountNavigation from './AccountNavigation'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return(
    <Tab.Navigator initialRouteName='Pokedex'>
        <Tab.Screen name = "Favorite" component={FavoriteNavigation} options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({color,size}) => <Icon name="heart" color={color} size={size}/>,
            title: "Favoritos",
            headerTitleAlign: "center",
        }}/>
        <Tab.Screen name = "Pokedex" component = {PokedexNavigation} options={{
            tabBarLabel: "",
            tabBarIcon: () => renderPokeball(),
            title: "Pokedex",
            headerTitleAlign: "center",
        }}/>
        <Tab.Screen name = "Account" component={AccountNavigation} options={{
            tabBarLabel: "Cuenta",
            tabBarIcon: ({color, size}) => <Icon name="user" color={color} size= {size}/>,
            title: "Cuenta",
            headerTitleAlign: "center",
        }}/>
    </Tab.Navigator>
  )
}

function renderPokeball (){
    return (
    <Image 
    source={require("../assets/pokeball.png")}
    style={{width:75, height: 75, top: -15}}
    />
    )
    
}