import LogIn from "../components/LogIn";
import React from "react";
import { View } from "react-native";

export default function LogInScreen(props) {
  return (
    <View>
      <LogIn navigation={props.navigation}></LogIn>
    </View>
  );
}
