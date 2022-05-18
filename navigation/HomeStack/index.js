import HomeScreen from "../../screens/Home";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCardPet from "../../components/MyCardPet";
import MyPetsScreen from "../../screens/MyPets";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
  </Stack.Navigator>
);

export default HomeNavigator;
