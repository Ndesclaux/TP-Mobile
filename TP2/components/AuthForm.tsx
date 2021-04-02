import React, {Component} from "react";
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import authenticationService from "../services/authentication.service";
import Input from "./Input";

interface AuthFormState {
    email: string,
    password: string
}

export default class AuthForm  extends Component<{}, AuthFormState>{

    state = {
        email: "",
        password: ""
    }

    onChangeEmail = (email: string) => {
        this.setState({email});
    }

    onChangePassword = (password: string) => {
        this.setState({password});
    }

    onConnexionClick = () => {
        const credentials = this.state.email + " / " + this.state.password;
        const user = authenticationService.authenticate(this.state.email, this.state.password);

        let msg = user !== null ? "Connexion réussie" : "Erreur de connexion !";
        msg += "\nIdentifiants : " + credentials;

        alert(msg);
    }

    onForgetPasswordClick = () => {
        Alert.alert("Click sur oublie mot de passe");
    }

    onSignUpClick = () => {
        Alert.alert("Click sur Inscription");
    }

    render() {
        return (
            <View style={styles.authForm}>
                <Image source={{uri : 'https://img.icons8.com/nolan/96/crab.png'}}
                       style={{width : 100, height : 100, marginVertical : 20}}/>
                <Input label={'Mail'}
                       imgUri={'https://img.icons8.com/nolan/96/email-sign.png'}
                       hideChar={false}
                       onChangeText={this.onChangeEmail}/>
                <Input label={'Password'}
                       imgUri={'https://img.icons8.com/nolan/96/password1.png'}
                       hideChar={true}
                       onChangeText={this.onChangePassword}/>

                <TouchableOpacity
                    style={styles.connexion}
                    onPress={this.onConnexionClick}>
                    <Text>Connexion</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{marginTop : 40}}
                    onPress={this.onForgetPasswordClick}>
                    <Text>Mot de passe oublié</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{marginTop : 20}}
                    onPress={this.onSignUpClick}>
                    <Text>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    authForm: {
        flex: 1,
        alignItems: 'center',
        borderWidth : 2,
        borderColor : '#fff',
        borderRadius : 10,
        maxHeight : 500,

        marginHorizontal : 15
    },

    connexion: {

        marginTop: 10,

        backgroundColor: '#3399ff',
        borderRadius: 10,

        paddingHorizontal: 15,
        paddingVertical: 5,
    }
});
