import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  RootStackParamList,
  HomeStackScreen,
  SettingsStackScreen,
} from "./app-stacks";

// Define main tab navigator
const Tab = createBottomTabNavigator<RootStackParamList>();
export const TabNavigator = () => {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any; // TODO: find better type

            if (route.name === "Cocktail") {
              iconName = focused
                ? "wine"
                : "wine-outline";
            } else if (route.name === "Ingredient") {
              iconName = focused ? "ios-list-sharp" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "green",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Cocktail"
          component={HomeStackScreen}
        />
        <Tab.Screen name="Ingredient" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
