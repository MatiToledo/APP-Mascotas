import { React, useState } from "react";
import {
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { infoAboutPet, sendNotification } from "../lib/api";

import MyButton from "../ui/Button";

export default function PopUp(props) {
  const { visible, closeModal, pet } = props;
  const [reporterName, setReporterName] = useState("");
  const [reporterPhoneNumber, setReporterPhoneNumber] = useState("");
  const [seenIn, setSeenIn] = useState("");

  function handleReporterName(t) {
    setReporterName(t);
  }
  function handleReporterPhoneNumber(t) {
    setReporterPhoneNumber(t);
  }
  function handleSeenIn(t) {
    setSeenIn(t);
  }
  async function handleSubmit() {
    console.log(pet);
    await infoAboutPet({
      petId: pet.petId,
      petName: pet.petName,
      reporterName,
      seenIn,
      reporterPhoneNumber,
    });
    const notification = await sendNotification({
      petOwnerEmail: pet.petOwnerEmail,
      petName: pet.petName,
      reporterName,
      seenIn,
      reporterPhoneNumber,
    });
    if (notification == true) {
      Alert.alert("reporte realizado con exito ");
      closeModal();
    } else {
      Alert.alert("error al realizar el reporte");
    }
  }

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.center}>
        <View style={styles.container}>
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={closeModal}
          >
            <Image
              style={styles.close}
              source={require("../images/close.png")}
            ></Image>
          </TouchableHighlight>
          <Text style={styles.title}>
            Reportar información sobre {pet.petName}
          </Text>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.label}>Tu nombre</Text>
              <TextInput
                style={styles.textInput}
                placeholder="  Introduzca su nombre"
                value={reporterName}
                onChangeText={handleReporterName}
              ></TextInput>
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>Tu telefono</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                placeholder="  Introduzca su telefono"
                value={reporterPhoneNumber}
                onChangeText={handleReporterPhoneNumber}
              ></TextInput>
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>Donde lo viste</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={styles.textInput}
                placeholder="  Donde lo viste?"
                value={seenIn}
                onChangeText={handleSeenIn}
              ></TextInput>
            </View>
            <MyButton
              title="Enviar información"
              onPress={handleSubmit}
            ></MyButton>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  close: {
    marginTop: 10,
    marginLeft: 320,
    width: 15,
    height: 15,
  },
  container: {
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.27,
    elevation: 19,
    borderRadius: 7,
    borderColor: "gray",
    borderWidth: 1,
  },
  title: {
    maxWidth: 300,
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
});
