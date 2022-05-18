import { React, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import { checkEmail, authToken } from "../lib/api";
import { useSelector, useDispatch } from "react-redux";

import MyButton from "../ui/Button";
import { logIn } from "../store/actions/auth.action";

export default function LogIn(props) {
  const dispatch = useDispatch();
  const navigation = props.navigation;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authSelector = useSelector((state) => state.auth);

  async function handleOnPress() {
    const exist = await checkEmail(email);
    if (exist) {
      const auth = await authToken({ email, password });
      if (auth.token) {
        dispatch(
          logIn({
            userName: auth.user.userName,
            email: auth.user.email,
            token: auth.token,
          })
        );
        navigation.navigate("Home");
        Alert.alert("Inicio de sesion realizado con exito");
      } else {
        Alert.alert("Contraseña o email incorrecto");
      }
    } else {
      Alert.alert("No existe un usuario con ese email");
    }
  }

  function handleEmail(t) {
    setEmail(t);
  }
  function handlePassword(t) {
    setPassword(t);
  }
  function handleLogUp() {
    navigation.navigate("Log Up");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar</Text>
      <View style={styles.form}>
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
        <MyButton onPress={handleOnPress} title="Ingresar"></MyButton>
      </View>
      <Text style={styles.link} onPress={handleLogUp}>
        Registrarse
      </Text>
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
