import React, {Component} from "react";
import {Cocktail} from "../models/cocktail.model";
import {StyleSheet, Text, View} from "react-native";

interface CocktailState {

}

export default class CocktailComponent extends Component<Cocktail, CocktailState>{

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}>

                </View>
                <View style={styles.content}>
                    <Text style={{flexWrap: 'wrap'}}>{this.props.name} {"\n"}</Text>
                    <Text style={{flexWrap: 'wrap'}}>{this.props.instructions}</Text>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',

        marginVertical: 5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ff9900',

        height: 100,
    },

    content: {
        flex: 1,
        flexDirection: 'column',
        height: 100,
    },

    image: {
        width: 100,
        height: 100
    }
});
