import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/home/Home";
import Details from "./src/screens/recipes/Details";

const Stack = createNativeStackNavigator();

import configureStore from "./src/redux/store";
import { Provider } from "react-redux";

export default function App (){ 
    return (
      <Provider store={configureStore()}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Details"
              component={Details}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
  