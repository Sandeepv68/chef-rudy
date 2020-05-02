import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import HomeScreen from "./Screens/Home/HomeScreen";
import RecipeSearch from "./Screens/RecipeSearch/RecipeSearch";
import AnalyzeMeal from "./Screens/AnalyzeMeal/AnalyzeMeal";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
