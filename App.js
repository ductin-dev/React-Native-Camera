import React from "react";
import { StyleSheet, Text } from "react-native";

import {
  NavigationContainer,
  DarkTheme,
  DrawerActions,
} from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screen/Home";
import TroList from "./screen/TroList";
import CAMERA from "./screen/CAMERA";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="NON" component={TroList} />
          <Drawer.Screen name="CAMERA" component={CAMERA} />
        </Drawer.Navigator>
      </NavigationContainer>
      <Text>ROOT: いいえ、デバイスがアプリに十分な権限を付与していません</Text>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});
