import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import MyButton from "../ui/Button";
import { React, useState } from "react";
import ImageSelector from "./ImageSelector";
import Maps from "./Maps";
import { useSelector } from "react-redux";
import { createPetReport } from "../lib/api";

export default function ReportPetComp(props) {
  console.log(props);
  const navigation = props.navigation;
  const auth = useSelector((state) => state.auth);
  const [petName, setPetName] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [petPhoto, setPetPhoto] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const petOwnerEmail = auth.email;
  const token = auth.token;

  function handlePetName(t) {
    setPetName(t);
  }
  function handlePetDescription(t) {
    setPetDescription(t);
  }
  function handleImage(image) {
    setPetPhoto(image);
  }
  function handleGeoData(data) {
    setGeoData(data);
  }
  async function handleReport() {
    const data = {
      petName,
      petDescription,
      petOwnerEmail,
      petUbication: geoData ? geoData.petUbication : null,
      lastlocationLat: geoData ? geoData.lastlocationLat : null,
      lastlocationLng: geoData ? geoData.lastlocationLng : null,
      petPhoto,
    };
    const report = await createPetReport(data, token);
    if (report == true) {
      navigation.navigate("Home");
      Alert.alert("Mascota reportada con exito");
    } else {
      navigation.navigate("Home");
      Alert.alert("No se pudo reportar la mascota");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportar Mascota</Text>
      <ScrollView>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.textInput}
              placeholder="  Introduzca el nombre de la mascota"
              value={petName}
              onChangeText={handlePetName}
            ></TextInput>
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={styles.textInput}
              placeholder="  Introduzca una de la mascota"
              value={petDescription}
              onChangeText={handlePetDescription}
            ></TextInput>
          </View>
        </View>
        <ImageSelector handleImage={handleImage}></ImageSelector>
        <Maps handleGeoData={handleGeoData}></Maps>
        <MyButton
          title="Reportar Mascota"
          variant="loader"
          onPress={handleReport}
        ></MyButton>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
  },
  title: {
    fontFamily: "InterRegular",
    fontWeight: "700",
    fontSize: 27,
    textAlign: "center",
    margin: 12,
    marginBottom: 20,
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
