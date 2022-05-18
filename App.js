import AppLoading from "expo-app-loading";
import React from "react";
import { useFonts } from "expo-font";
import MainNavigator from "./navigation";
import { Provider } from "react-redux";
import store from "./store";
import { init } from "./db";

init()
  .then(() => console.log("Database initialized."))
  .catch((err) => {
    console.log("Database fail connection: " + err.message);
  });

export default function App() {
  const [loaded] = useFonts({
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading></AppLoading>;
  }

  return (
    <Provider store={store}>
      <MainNavigator></MainNavigator>
    </Provider>
  );
}
