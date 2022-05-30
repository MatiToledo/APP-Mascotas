import { useState } from "react";
import { Pressable, StyleSheet, Text, ActivityIndicator } from "react-native";

import colors from "../constants/colors";

export default function MyButton(props) {
  const [loading, setLoading] = useState(false);

  function handlePress() {
    setLoading(!loading);
  }

  if (props.variant == "secondary") {
    return (
      <Pressable onPress={props.onPress} style={styles.buttonsecondary}>
        <Text style={styles.textsecondary}>{props.title}</Text>
      </Pressable>
    );
  } else if (props.variant == "loader") {
    return (
      <Pressable
        onPress={props.onPress}
        onPressIn={handlePress}
        style={styles.button}
      >
        {loading ? (
          <ActivityIndicator
            color={"#fafafa"}
            animating={loading}
          ></ActivityIndicator>
        ) : (
          <Text style={styles.text}>{props.title}</Text>
        )}
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress} style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
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
    // marginTop: 15,
  },
  textsecondary: {
    color: "black",
    fontFamily: "InterRegular",
    fontWeight: "400",
    fontSize: 16,
  },
});
