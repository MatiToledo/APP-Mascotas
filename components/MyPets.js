import { React, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userPets } from "../store/actions/user.action";
import MyButton from "../ui/Button";
import MyCardPet from "./MyCardPet";

export default function MyPetsComp(props) {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.user.userPets);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(userPets(token));
  }, []);

  function handleReport() {
    props.navigation.navigate("Report");
  }

  function renderCardsPet(i) {
    return (
      <MyCardPet
        petName={i.item.petName}
        petPhoto={i.item.petPhoto}
        petId={i.item.id}
      ></MyCardPet>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis mascotas reportadas</Text>
      {pets.length !== 0 ? (
        <FlatList
          data={pets}
          renderItem={renderCardsPet}
          keyExtractor={(pet) => pet.id}
        />
      ) : (
        <Text>No tienes mascotas reportadas</Text>
      )}
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
