import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "../HomeStack";
import LogInNavigator from "../LogInStack/index";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PetsNavigator from "../PetsStack/index";
import colors from "../../constants/colors";
import { useSelector } from "react-redux";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="TabHome"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="md-home" size={24} color="black" />
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="TabPets"
        component={PetsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="paw" size={24} color="black" />
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="TabLogIn"
        component={LogInNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="person" size={24} color="black" />
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    elevation: 5,
    flex: 0.06,
    backgroundColor: colors.secondary,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigator;
