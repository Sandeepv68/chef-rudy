/**
 * App
 * Moin app component
 */

/**
 * Import React and Redux
 */
import React from "react";
import { Provider } from "react-redux";

/**
 * Import react-navigation
 * and create a stack navigation component
 */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

/**
 * Import HOCs
 */
import withNetInfo from "./HOCs/withNetInfo/withNetInfo";

/**
 * Import all the screens
 */
import HomeScreen from "./Screens/Home/HomeScreen";
import RecipeSearch from "./Screens/RecipeSearch/RecipeSearch";
import AnalyzeMeal from "./Screens/AnalyzeMeal/AnalyzeMeal";
import ShowRecipe from "./Screens/ShowRecipe/ShowRecipe";

/**
 * Import the redux store and create a new store instance
 */
import chefRudyStore from "./Redux/Store/chefRudyStore";
const store = chefRudyStore();

/**
 * App
 * The main app component with screens wrapped in navigation HOC
 */
const App: React.SFC = () => {
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
};

/**
 * ChefRudy
 * The app component with redux store provided
 */
const ChefRudy: React.SFC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default withNetInfo(ChefRudy);
