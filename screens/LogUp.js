import React from "react";
import { View } from "react-native";
import LogUp from "../components/LogUp";

export default function LogUpScreen(props) {
  return (
    <View>
      <LogUp navigation={props.navigation}></LogUp>
    </View>
  );
}
