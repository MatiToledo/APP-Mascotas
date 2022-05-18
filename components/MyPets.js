import { React } from "react";
import { StyleSheet, Text, FlatList, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { PETS } from "../data/pets";
import MyButton from "../ui/Button";
import MyCardPet from "./MyCardPet";

export default function MyPetsComp(props) {
  const token = useSelector((state) => state.auth.token);
  console.log("MY PETS TOKEN", token);

  // function handleLogIn() {
  //   props.navigation.navigate("Log In");
  // }

  // if (!token) {
  //   return (
  //     <View>
  //       <Text>Debes iniciar sesion para ver tus mascotas!</Text>
  //       <MyButton title="Iniciar Sesion" onPress={handleLogIn}></MyButton>
  //     </View>
  //   );
  // }

  function handleReport() {
    props.navigation.navigate("Report");
  }

  function renderCardsPet(i) {
    return (
      <MyCardPet
        petName={i.item.petName}
        petDescription={i.item.petDescription}
        petUbication={i.item.petUbication}
        petPhoto={i.item.petPhoto}
      ></MyCardPet>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis mascotas reportadas</Text>
      <FlatList
        data={PETS}
        renderItem={renderCardsPet}
        keyExtractor={(pet) => pet.petId}
      />
      <View style={styles.ubication}>
        <MyButton title={"Reportar mascota"} onPress={handleReport}></MyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "InterRegular",
    fontWeight: "700",
    fontSize: 27,
    textAlign: "center",
    margin: 12,
  },
  ubication: {
    marginVertical: 15,
  },
});
