import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPetsScreen from "../../screens/MyPets";
import ReportPetScreen from "../../screens/ReportPet";

const Stack = createNativeStackNavigator();

function PetsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Pets"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Pets" component={MyPetsScreen}></Stack.Screen>
      <Stack.Screen name="Report" component={ReportPetScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default PetsNavigator;
