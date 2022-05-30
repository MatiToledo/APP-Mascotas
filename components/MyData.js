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
import { modifyData } from "../lib/api";

import MyButton from "../ui/Button";
import { authAction, authDelete } from "../store/actions/auth.action";

export default function MyData(props) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(auth.userName);
  const [newEmail, setNewEmail] = useState(auth.email);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  function handleUserName(t) {
    setUserName(t);
  }
  function handleNewEmail(t) {
    setNewEmail(t);
  }
  function handlePassword(t) {
    setPassword(t);
  }
  function handleConfirmPassword(t) {
    setConfirmpassword(t);
  }

  async function handleOnPress() {
    const modificar = await modifyData(
      {
        email: auth.email,
        newEmail,
        userName,
        password,
        confirmpassword,
      },
      auth.token
    );
    if (modificar !== false) {
      dispatch(authAction(userName, auth.token, newEmail));
      Alert.alert("Información modificada con éxito");
      props.navigation.navigate("Home");
    } else {
      setPassword(""), setConfirmpassword("");
      Alert.alert("Error al modificar la información");
    }
  }

  function handleLogOut() {
    dispatch(authDelete());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Datos</Text>
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
            value={newEmail}
            onChangeText={handleNewEmail}
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
        <MyButton onPress={handleOnPress} title="Modificar"></MyButton>
      </View>
      <View style={styles.logout}>
        <MyButton
          onPress={handleLogOut}
          variant="loader"
          title="Cerrar sesion"
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
  logout: {
    position: "absolute",
    bottom: 60,
  },
});
