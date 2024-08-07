import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function NoLogged() {
    const navigation = useNavigation();



    return (
        <View style={styles.content}>
            <Text style={styles.text}>Para acceder a esta funcionalidad debes iniciar sesion</Text>
            <Button title= "Inicia sesion aqui" onPress={() => navigation.navigate("Account")}/>
        </View>
    )
}

const styles = StyleSheet.create({
content: {
    marginVertical:50,
    paddingHorizontal: 50
},
text: {
    textAlign: "center",
    marginBottom: 10
}
})