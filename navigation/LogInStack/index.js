import { React } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "../../screens/LogIn";
import LogUpScreen from "../../screens/LogUp";
import { useSelector } from "react-redux";
import MyDataScreen from "../../screens/MyData";

const Stack = createNativeStackNavigator();

function LogInNavigator() {
  const token = useSelector((state) => state.auth.token);

  const auth = (
    <Stack.Navigator
      initialRouteName="Log"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="My Data" component={MyDataScreen}></Stack.Screen>
    </Stack.Navigator>
  );

  const noAuth = (
    <Stack.Navigator
      initialRouteName="Log"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Log In" component={LogInScreen}></Stack.Screen>
      <Stack.Screen name="Log Up" component={LogUpScreen}></Stack.Screen>
    </Stack.Navigator>
  );

  if (token) {
    return auth;
  } else {
    return noAuth;
  }
}

export default LogInNavigator;
