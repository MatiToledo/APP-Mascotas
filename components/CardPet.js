import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PopUp from "./PopUp";

export default function CardPet(props) {
  const { petName, petPhoto, petDescription, petUbication } = props;
  const [modalVisible, setModalVisible] = useState(false);
  function handleReport() {
    setModalVisible(!modalVisible);
  }

  function closeModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: `${petPhoto}`,
        }}
      ></Image>
      <View style={styles.info_container}>
        <Text style={styles.subtitle}>{petName}</Text>
        <Text style={styles.body}>{petDescription}</Text>
      </View>
      <View style={styles.location}>
        <Text style={styles.body}>Perdido en: {petUbication}</Text>
      </View>
      <Pressable onPress={handleReport} style={styles.report}>
        <Text style={styles.report_text}> Reportar información </Text>
      </Pressable>
      <PopUp visible={modalVisible} pet={props} closeModal={closeModal}></PopUp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: 330,
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
  },
  img: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: 330,
    height: 220,
    resizeMode: "cover",
  },
  info_container: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontFamily: "InterRegular",
    fontWeight: "600",
    fontSize: 23,
  },
  body: {
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
  },
  location: {
    marginVertical: 15,
    paddingHorizontal: 24,
  },
  report: {
    alignItems: "center",
    padding: 12,
    borderTopColor: "#ececec",
    borderTopWidth: 2,
  },
  report_text: {
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
    color: "#485fc7",
  },
});
