import React from "react";
import { View } from "react-native";
import MyPetsComp from "../components/MyPets";
export default function MyPetsScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <MyPetsComp navigation={props.navigation}></MyPetsComp>
    </View>
  );
}
