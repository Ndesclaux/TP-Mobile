import React, {Component} from "react";
import {View, StyleSheet, Text, Switch, TouchableOpacity} from "react-native";
import {Todo} from "../services/todo.service";

interface TodoStates {
    completed: boolean
}

export default class Task extends Component<Todo,TodoStates>{

    constructor(props: Todo) {
        super(props);

        this.state = {
            completed: this.props.completed,
        }
    }



    toggleSwitch(){
        let newValue = !this.state.completed;

        this.setState( { completed: newValue } );
        //this.props.toggleTodo(this.state.task);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.task}</Text>
                <View style={styles.containerAction}>
                    <Switch value={this.state.completed} style={styles.switchButton}
                            onValueChange={this.toggleSwitch}/>
                    <TouchableOpacity>
                        <View>
                            <Text style={styles.cross}>x</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',

        alignItems: "center",
        height: 50,
        marginBottom: 20,
    },

    containerAction : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',

        marginHorizontal: 5,
    },

    text: {
        fontSize: 20,
    },

    switchButton: {
        marginHorizontal: 15,
    },

    cross: {
        fontSize: 26,
        color: 'red',
        fontWeight: '400',
    }
});
