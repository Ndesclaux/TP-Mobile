import React, { Component } from "react";
import {Text, View, Button, TextInput, StyleSheet, FlatList} from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";
import {Cocktail} from "../models/cocktail.model";
import cocktailService from "../services/cocktail.service";
import CocktailComponent from "../components/CocktailComponent";

interface CocktailStates {
    cocktailsList: Array<Cocktail>
}

export default class CocktailScreen extends Component<HomeScreenProps, CocktailStates> {

    state = {
        cocktailsList: [] as Cocktail[],
    }

   loadCocktails(name: string){

       cocktailService.searchCocktailsByName(name).then( (cocktailsList) => {

           this.setState({cocktailsList});
       })
   }

    render() {

        const { navigation } = this.props;

        console.log(this.state.cocktailsList)
        return (
            <View style={styles.container}>

                <TextInput placeholder={"Chercher un cocktail"} style={styles.textInput}
                onSubmitEditing={(event)=> this.loadCocktails(event.nativeEvent.text)}/>
                <Text style={{ textAlign: "center", marginBottom: 15}}>Home!</Text>
                <FlatList data={this.state.cocktailsList}
                          renderItem={({item}: { item: Cocktail }) =>
                              <CocktailComponent id={item.id} name={item.name} img={item.img}
                                                 instructions={item.instructions} thumbnail={item.thumbnail}/>
                          }
                          keyExtractor={cocktail => cocktail.id.toString()}/>

                {/*<Button
                    title="Go to Ingredients"
                    onPress={() => navigation.navigate("Ingredient")}
                />
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate("Details")}
                />*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#4d94ff',
        height: 50,
    },

    textInput: {
        textAlign: 'center',
        backgroundColor: '#f2f2f2',


        borderBottomWidth: 1,
        borderColor: '#000000',

        height: 30,
        marginBottom: 20,
    }
});
