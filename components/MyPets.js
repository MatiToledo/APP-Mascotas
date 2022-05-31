import { React, useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userPets } from "../store/actions/user.action";
import MyButton from "../ui/Button";
import MyCardPet from "./MyCardPet";

export default function MyPetsComp(props) {
  const navigation = props.navigation;

  const dispatch = useDispatch();
  const pets = useSelector((state) => state.user.userPets);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(userPets(token));
  }, []);

  function handleReport() {
    navigation.navigate("Report");
  }

  function renderCardsPet(i) {
    return (
      <MyCardPet
        petName={i.item.petName}
        petPhoto={i.item.petPhoto}
        petId={i.item.id}
        navigation={navigation}
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
        <Text style={styles.nopets}>No tienes mascotas reportadas</Text>
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
    marginTop: 30,
  },
  ubication: {
    marginVertical: 15,
  },
  nopets: {
    flex: 1,
    textAlignVertical: "center",
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 20,
    maxWidth: 200,
    textAlign: "center",
  },
});
