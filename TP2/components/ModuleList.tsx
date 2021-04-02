import React, {Component} from "react";
import {Module} from "../services/module.service";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AuthForm from "./AuthForm";
import ModuleItem from "./ModuleItem";

import moduleService from "../services/module.service";


interface ModuleListState{
    modules: Array<Module>
}

export default class ModuleList extends Component<{},ModuleListState>{

    state = {
        modules: [],
    }

    loadModule = () => {
        moduleService.getAll().then( (modules) => {
            this.setState({modules});
        })
    }

    componentDidMount() {
        this.loadModule();
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.ShowModuleButton}>
                    <Text>Afficher les Modules</Text>
                </TouchableOpacity>
                <FlatList data={this.state.modules}
                          renderItem={({item} : {item:Module}) =>
                              <ModuleItem
                                  id={item.id}
                                  name={item.name}
                                  description={item.description}
                                  imageUrl={item.imageUrl}
                                  teacher={item.teacher}
                                  year={item.year}/>
                          }>

                </FlatList>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    ShowModuleButton: {
        marginTop: 10,

        backgroundColor: '#3399ff',
        borderRadius: 10,

        paddingHorizontal: 15,
        paddingVertical: 5,

        textAlign: "center",

        marginBottom: 50

    }
});
