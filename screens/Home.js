import { FlatList, StyleSheet, View, Text } from "react-native";

import CardPet from "../components/CardPet";
import Home from "../components/Home";
import MyButton from "../ui/Button";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUbication, loadUbication } from "../store/actions/user.action";
import { useState } from "react";

export default function HomeScreen(props) {
  const [pets, setPets] = useState([]);
  const [ubication, setUbication] = useState(false);
  const userSelector = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function getPets(pets) {
    setPets(pets);
  }

  function handleUbication() {
    setUbication(!ubication);
  }

  function deleteUbication() {
    dispatch(loadUbication());
    // dispatch(removeUbication());
    setUbication(!ubication);
  }

  function renderCardsPet(i) {
    return (
      <CardPet
        petName={i.item.petName}
        petDescription={i.item.petDescription}
        petUbication={i.item.petUbication}
        petPhoto={i.item.petPhoto}
        petOwnerEmail={i.item.petOwnerEmail}
        petId={i.item.objectID}
      ></CardPet>
    );
  }

  const switchUbication = (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.title}>Mascotas perdidas cerca tuyo</Text>
      <FlatList
        data={pets}
        renderItem={renderCardsPet}
        keyExtractor={(pet) => pet.objectID}
      />
      <View style={styles.ubication}>
        <MyButton
          title={"Eliminar mi ubicación"}
          onPress={deleteUbication}
        ></MyButton>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {ubication ? (
        switchUbication
      ) : (
        <Home getPets={getPets} handleUbication={handleUbication}></Home>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  ubication: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 15,
  },
  title: {
    fontFamily: "InterRegular",
    fontWeight: "700",
    fontSize: 27,
    textAlign: "center",
    maxWidth: 300,
    marginTop: 20,
  },
});
