import React from "react";
import { View } from "react-native";
import MyData from "../components/MyData";

export default function MyDataScreen(props) {
  return (
    <View>
      <MyData navigation={props.navigation}></MyData>
    </View>
  );
}
