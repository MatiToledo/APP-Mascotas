import { StyleSheet, Text, View, Alert } from "react-native";
import MyButton from "../ui/Button";
import colors from "../constants/colors";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { addUbication } from "../store/actions/user.action";
import { petsAround } from "../lib/api";
import { loadAuth } from "../store/actions/auth.action";

export default function Home(props) {
  const [loader, setLoader] = useState("loader");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAuth());
  }, []);

  async function verifyPermissions() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de localizacion para usar la aplicacion",
        [{ text: "ok" }]
      );
      return false;
    }
    return true;
  }

  async function handlerPress() {
    setLoader("loader");
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    let location = await Location.getCurrentPositionAsync({ timeout: 5000 });

    dispatch(
      addUbication({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      })
    );

    const petsFound = await petsAround(
      location.coords.latitude,
      location.coords.longitude
    );
    if (petsFound.length == 0) {
      setLoader("");
      Alert.alert("No hay mascotas perdidas cerca tuyo");
    } else {
      props.getPets(petsFound);
      props.handleUbication();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.body}>
        Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
        conocer tu ubicación.
      </Text>
      <MyButton
        variant={loader}
        title={"Dar mi ubicación"}
        onPress={handlerPress.bind()}
      ></MyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  body: {
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    width: 300,
    marginTop: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    borderRadius: 5,
  },
});
