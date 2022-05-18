import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigator from "./Tab/TabNavigator";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
