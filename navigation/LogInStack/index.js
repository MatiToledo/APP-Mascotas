import { React } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "../../screens/LogIn";
import LogUpScreen from "../../screens/LogUp";
import { useSelector } from "react-redux";
import MyDataScreen from "../../screens/MyData";

const Stack = createNativeStackNavigator();

function LogInNavigator() {
  const token = useSelector((state) => state.auth.token);
  console.log(token);

  return (
    <Stack.Navigator
      initialRouteName="Log"
      screenOptions={{
        headerShown: false,
      }}
    >
      {token ? (
        <Stack.Screen name="My Data" component={MyDataScreen}></Stack.Screen>
      ) : (
        ((<Stack.Screen name="Log Up" component={LogUpScreen}></Stack.Screen>),
        (<Stack.Screen name="Log In" component={LogInScreen}></Stack.Screen>))
      )}
      {/* <Stack.Screen name="Log In" component={LogInScreen}></Stack.Screen>
      <Stack.Screen name="Log Up" component={LogUpScreen}></Stack.Screen> */}
    </Stack.Navigator>
  );
}

export default LogInNavigator;
