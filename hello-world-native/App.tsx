import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList} from 'react-native';
import {Person} from "./Interface/Person";
import {findAllInRenderedTree} from "react-dom/test-utils";


let blue1 = '#00b8e6';
let blue2 = '#80e5ff';

const PersonRow = (props : {lastName : string, name : string}) => {
    return (
        <View style={styles.container}>
            <Text style={{backgroundColor : blue1}}>{props.name} {props.lastName}</Text>
        </View>
    );
}

let persons : Person[];
persons = [
    {
        id : 0,
        name : "Benoit",
        lastName : "Pair"
    },
    {
        id : 1,
        name : "Paul",
        lastName : "Lorgue"
    },
    {
        id : 2,
        name : "Emma",
        lastName : "Duboz"
    },
    {
        id : 3,
        name : "Romain",
        lastName : "Bonnefon"
    },
    {
        id : 4,
        name : "Julie",
        lastName : "Juaneda"
    },
    {
        id : 5,
        name : "Laura",
        lastName : "Garlatti"
    }
];

export default function App() {
    //return exoCarre();
    //return exoImg();
    //return scrollView();
    return MyFlatList();
    //return TouchableExo();
    //return TextInputExo();
    return MyComponent();

}

const exoCarre = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.square, {backgroundColor: 'red'}]}></View>
            <View style={[styles.square, {backgroundColor: 'orange'}]}></View>
            <View style={[styles.square, {backgroundColor: 'green'}]}></View>
            <StatusBar style="auto" />
        </View>
    );
}

const exoImg = () => {
    return (
        <View style={styles.container}>
            <Image style={{width : 108, height:75}} source={{uri : 'https://www.bpesquet.fr/images/ENSC.jpg'}}/>
            <Image style={{width : 108, height:75}} source={{uri : 'https://www.bpesquet.fr/images/ENSC.jpg'}}/>
            <Image style={{width : 108, height:75}} source={{uri : 'https://www.bpesquet.fr/images/ENSC.jpg'}}/>
            <StatusBar style="auto" />
        </View>
    );
}
let state = {
    content: {}
};

const scrollView = () => {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={state.content}>
                <View>
                    <View style={[styles.bigSquare, {backgroundColor : blue1}]}></View>

                    <ScrollView horizontal showsHorizontalScrollIndicator style={{maxWidth: 300}}>
                        <View style={[styles.lilSquare, {backgroundColor : blue2}]}></View>
                        <View style={[styles.lilSquare, {backgroundColor : blue2}]}></View>
                        <View style={[styles.lilSquare, {backgroundColor : blue2}]}></View>
                        <View style={[styles.lilSquare, {backgroundColor : blue2}]}></View>
                        <View style={[styles.lilSquare, {backgroundColor : blue2}]}></View>
                        <View style={[styles.lilSquare, {backgroundColor : blue2}]}></View>
                        <View style={[styles.lilSquare, {backgroundColor : blue2}]}></View>
                    </ScrollView>

                    <View style={[styles.bigSquare, {backgroundColor : blue1}]}></View>
                    <View style={[styles.bigSquare, {backgroundColor : blue1}]}></View>
                    <View style={[styles.bigSquare, {backgroundColor : blue1}]}></View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}


const MyFlatList = () => {

    return (
        <View style={styles.container}>
            <FlatList
                data={persons}
                renderItem={({item} : {item:Person}) => <PersonRow lastName={item.lastName} name={item.name}/>}
                keyExtractor={item => item.name}
            />
        </View>
    );
}

const TouchableExo = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onAreaPressed}>
                <View style={{backgroundColor : blue1}}>
                    <Text>Touch this area 😉</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

function onAreaPressed(){
    alert("No no, don't touch me there");
}

const TextInputExo = () =>{
    return (
        <View style={styles.container}>
            <TextInput placeholder="Type here" onSubmitEditing={text => textSubmitted(text.nativeEvent.text)}>

            </TextInput>
        </View>
    )
}

function textSubmitted(text : string){
    alert("Vous avez tapé : " + text)
}

const MyComponent = () => {
    return(
        <View style={styles.container}>
            <FlatList data={persons}
                      renderItem={({item} : {item:Person}) => <PersonRow lastName={item.lastName} name={item.name}/>}
                      keyExtractor={item => item.name}/>
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent: 'space-between'
    },

    square:{
        width: 100,
        height: 100,
    },

    bigSquare:{
        width: 300,
        height: 300,
        marginVertical: 10
    },

    lilSquare:{
        width: 50,
        height: 50,
        marginHorizontal: 10
    },
});
