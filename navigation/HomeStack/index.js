import HomeScreen from "../../screens/Home";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default HomeNavigator;
