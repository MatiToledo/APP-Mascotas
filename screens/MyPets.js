import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MyPetsComp from "../components/MyPets";
import { useSelector } from "react-redux";

export default function MyPetsScreen(props) {
  const token = useSelector((state) => state.auth.token);

  return (
    <View style={{ flex: 1 }}>
      {token ? (
        <MyPetsComp navigation={props.navigation}></MyPetsComp>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>
            Debes registarte para ver tus mascotas
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  title: {
    fontFamily: "InterRegular",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    maxWidth: 340,
  },
});
