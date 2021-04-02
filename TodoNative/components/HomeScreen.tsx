import React, {Component} from "react";
import {View, StyleSheet, FlatList, TextInput, Text} from "react-native";
import {Todo} from "../services/todo.service";
import todoService from "../services/todo.service";
import Task from "./Task";

interface HomeScreenState {
    tasks: Array<Todo>,
    newTask: string,
}

export default class HomeScreen extends Component<{},HomeScreenState>{

    state = {
        tasks: [] as any[],
        newTask: "",
    }

    loadTasks(){
        todoService.getAll().then((tasks) => {
            this.setState({tasks})

            console.log(this.state.tasks);
        }).catch( (err) => {
            console.log(err)
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.header}>TodoReact</Text>

                <TextInput placeholder={"Saisissez une nouvelle tâche"} style={styles.textInput}
                           onSubmitEditing={(event) => this.onSubmitText(event.nativeEvent.text)}/>

                <FlatList data={this.state.tasks}
                          renderItem={({item}: { item: Todo }) =>
                              <Task task={item.task} completed={item.completed}/>
                          }
                          keyExtractor={item => item.task}/>

            </View>
        );
    }

    onSubmitText(text: string){

        todoService.add(text);
        this.loadTasks();
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
        height: 30,
        marginBottom: 20,
    }
});
