import { React, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { auth, checkEmail } from "../lib/api";

import MyButton from "../ui/Button";

export default function LogUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigation = props.navigation;

  function handleEmail(t) {
    setEmail(t);
  }
  function handlePassword(t) {
    setPassword(t);
  }
  function handleConfirmPassword(t) {
    setConfirmpassword(t);
  }
  function handleUserName(t) {
    setUserName(t);
  }
  async function handleOnPress() {
    const exist = await checkEmail(email);
    if (!exist) {
      const setAuth = await auth({
        userName,
        email,
        password,
        confirmpassword,
      });
      if (setAuth == true) {
        Alert.alert("Registro realizado con exito");
        navigation.navigate("Home");
        console.log({
          userName,
          email,
          password,
          confirmpassword,
        });
      } else {
        setPassword("");
        setConfirmpassword("");
        Alert.alert("Las contraseñas no coinciden");
      }
    } else {
      Alert.alert("Ya existe un usuario con ese email");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.label}>Nombre de usuario</Text>
          <TextInput
            style={styles.textInput}
            placeholder="  Introduzca su nombre de usuario"
            value={userName}
            onChangeText={handleUserName}
          ></TextInput>
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="  Introduzca su email"
            value={email}
            onChangeText={handleEmail}
          ></TextInput>
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.textInput}
            placeholder="  Introduzca su contraseña"
            value={password}
            secureTextEntry={true}
            onChangeText={handlePassword}
          ></TextInput>
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Confirmar contraseña</Text>
          <TextInput
            style={styles.textInput}
            placeholder="  Confirme su contraseña"
            value={confirmpassword}
            secureTextEntry={true}
            onChangeText={handleConfirmPassword}
          ></TextInput>
        </View>
        <MyButton
          onPress={handleOnPress}
          variant="loader"
          title="Registrarse"
        ></MyButton>
      </View>
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
    fontSize: 27,
    textAlign: "center",
  },
  form: {
    marginTop: 20,
    marginBottom: 15,
    width: 300,
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    width: "100%",
    padding: 2,
  },
  link: {
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
    color: "#485fc7",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
