import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { React } from "react";
import { deletePetReport } from "../lib/api";

export default function MyCardPet(props) {
  const { petName, petPhoto, petId } = props;

  async function handleDelete() {
    const deletePet = await deletePetReport(
      { id: props.petId },
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzNjYzMDUzfQ.2F_SZk-dAkK8iCyCKW4vmfx2dmmTT2BazvDuzr8L1rs"
    );
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
        <Text style={styles.name}>{petName}</Text>
      </View>
      <View style={styles.report}>
        {/* <Text style={styles.edit}> Editar </Text>
        <View style={styles.barra}></View> */}
        <Pressable onPress={handleDelete}>
          <Text style={styles.delete}>Eliminar</Text>
        </Pressable>
      </View>
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
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  name: {
    fontFamily: "InterRegular",
    fontWeight: "600",
    fontSize: 23,
  },
  location: {
    marginVertical: 15,
    paddingHorizontal: 24,
  },
  report: {
    alignItems: "center",
    // padding: 12,
    borderTopColor: "#ececec",
    borderTopWidth: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  edit: {
    margin: 12,
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
    color: "#485fc7",
    marginLeft: 35,
  },
  delete: {
    margin: 12,
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
    color: "#485fc7",
    marginRight: 35,
  },
  barra: {
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
    backgroundColor: "#ececec",
    width: 2,
    height: 50,
  },
});
