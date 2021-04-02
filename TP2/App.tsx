import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from "./components/AuthForm";
import ModuleList from "./components/ModuleList";

export default function App() {
  return (
    <View style={styles.container}>
      <ModuleList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
