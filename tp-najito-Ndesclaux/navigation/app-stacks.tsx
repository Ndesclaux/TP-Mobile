import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import CocktailScreen from "../screens/CocktailScreen";
import DetailsScreen from "../screens/DetailsScreen";
import IngredientScreen from "../screens/IngredientScreen";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Cocktail: undefined;
  Details: undefined;
  Ingredient: undefined;
};

// Define view stack inside home tab
const HomeStack = createStackNavigator<RootStackParamList>();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Cocktail" component={CocktailScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

// Define view stack inside settings tab
const SettingsStack = createStackNavigator<RootStackParamList>();
export const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Ingredient" component={IngredientScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Cocktail">;
}

export interface DetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
}

export interface SettingsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Ingredient">;
}
