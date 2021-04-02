import React, {Component} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Module} from "../services/module.service";



export default class ModuleItem extends Component<Module,{}>{

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.year}>{this.props.year}</Text>
                </View>

                <Image source={{uri : this.props.imageUrl}} style={styles.img}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',

        width: 250,
        marginBottom: 20,
    },

    name: {
        fontWeight: 'bold'
    },

    year: {
        color: '#0066ff',
        textAlign:'right'
    },

    img : {
        backgroundColor: '#cccccc',

        borderRadius: 15,

        alignSelf: "flex-end",
        width : 75,
        height : 75,
        marginHorizontal : 5,
    },
});
