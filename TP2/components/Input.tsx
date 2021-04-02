import React, {Component} from "react";
import {Image, StyleSheet, TextInput, View} from "react-native";

interface InputProps {
    label: string ,
    imgUri: string,
    hideChar: boolean,
    onChangeText: (text: string) => void
}

interface InputState {
    placeholder: string,
}

export default class Input extends Component<InputProps, InputState> {

    state = {
        placeholder: this.props.label
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri : this.props.imgUri}} style={styles.img}/>
                <TextInput style={styles.input} placeholder={this.state.placeholder}
                           onFocus={ () =>{this.setState({placeholder : ""})}}
                           onBlur={ () => {this.setState({placeholder: this.props.label})}}
                secureTextEntry={this.props.hideChar}
                onChangeText={this.props.onChangeText}
                keyboardType={"email-address"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',

        backgroundColor : '#fff',
        marginVertical : 5,

        maxHeight : 40,
        width : 250,

        borderRadius : 15,
        borderColor : '#000',
        alignItems: "center"
    },

    img : {
        width : 40,
        height : 40,
        marginHorizontal : 5,
    },

    input: {
        /*fontSize : 26,*/
        /*maxWidth : 140,*/
    },
});
