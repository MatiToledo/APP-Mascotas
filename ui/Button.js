import { Pressable, StyleSheet, Text, View } from "react-native";

import colors from "../constants/colors";

export default function MyButton(props) {
  function handlePress() {
    console.log("APRETADO");
  }

  if (props.variant == "secondary") {
    return (
      <Pressable onPress={handlePress}>
        <Pressable onPress={props.onPress} style={styles.buttonsecondary}>
          <Text style={styles.textsecondary}>{props.title}</Text>
        </Pressable>
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={handlePress}>
        <Pressable onPress={props.onPress} style={styles.button}>
          <Text style={styles.text}>{props.title}</Text>
        </Pressable>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    borderRadius: 5,
  },
  buttonsecondary: {
    width: 300,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
  },
  textsecondary: {
    color: "black",
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
  },
});
