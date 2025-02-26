import React, {useState} from "react"
import {StyleSheet, View, Text, TextInput, Button, Keyboard} from "react-native"
import {useFormik} from "formik"
import * as Yup from "yup"
import useAuth from "../../hooks/useAuth"
import {user, userDetails} from "../../utils/userDB"


export default function LoginForm() {

    const[error, setError]=useState("");

    const{login} = useAuth();
    ////console.log(useAuth().user);
    const formik = useFormik({
        initialValues: initialValues(),

        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,

        onSubmit: (formValue) => {
            setError("");
            const {username, password}= formValue;
            
            if (username !== user.userName || password !== user.password) {
                setError("El usuario o la contraseña no son correctos");
            }else{
                login(userDetails);
                //console.log("Login correcto");
                //console.log(userDetails);
            }
        }
    });

    return (
        <View>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput placeholder="Nombre de usuario" 
                style = {styles.input} autoCapitalize="none" 
                value={formik.values.username} 
                onChangeText={(text) => formik.setFieldValue("username",text)}
            />
            <TextInput placeholder="Contraseña" 
                style = {styles.input} 
                autoCapitalize="none" 
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password",text)}
                />

            <Button title="Entrar" onPress={formik.handleSubmit}/>

            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>

            <Text style={styles.error}>{error}</Text>
        </View>
    );
}

function initialValues() {
    return {
        username:"",
        password:""
    }
}

function validationSchema() {
    return {
        username: Yup.string().required("Invalid user"),
        password: Yup.string().required("Invalid password")
    }
}

const styles = StyleSheet.create ({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error:{
        textAlign: "center",
        color: "#f00",
        marginTop: 20
    }

})