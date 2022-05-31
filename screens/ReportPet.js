import React from "react";
import { View } from "react-native";
import ReportPetComp from "../components/PetReport";

export default function ReportPetScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ReportPetComp navigation={props.navigation}></ReportPetComp>
    </View>
  );
}
