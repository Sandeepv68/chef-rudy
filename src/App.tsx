import React from "react";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import HomeScreen from "./Screens/Home/HomeScreen";
import RecipeSearch from "./Screens/RecipeSearch/RecipeSearch";
import AnalyzeMeal from "./Screens/AnalyzeMeal/AnalyzeMeal";
import ShowRecipe from "./Screens/ShowRecipe/ShowRecipe";

import chefRudyStore from "./Redux/Store/chefRudyStore";
const store = chefRudyStore();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={RecipeSearch} />
        <Stack.Screen name="Analyze" component={AnalyzeMeal} />
        <Stack.Screen name="Show" component={ShowRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ChefRudy = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ChefRudy;
