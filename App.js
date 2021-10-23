import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ExploreScreen from "./src/screens/home/Home";
import RecipeDetails from "./src/screens/recipes/Details";

import configureStore from "./src/redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={configureStore()}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    options={{ headerShown: false }}
                    name="ExploreScreen" 
                    component={ExploreScreen} 
                />
                <Stack.Screen 
                    name="RecipeDetails"
                    component={RecipeDetails} 
                />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
