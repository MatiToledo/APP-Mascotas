import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import MyButton from "../ui/Button";

export default function ImageSelector(props) {
  const [image, setImage] = useState(
    "http://www.organizacionglobal.com/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"
  );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (result.base64) {
      setImage(result.uri);
      const base64 = `data:image/png;base64,${result.base64}`;
      props.handleImage(base64);
    } else {
      Alert.alert("No se pudo cargar la imagen");
    }
  };

  return (
    <View>
      <MyButton
        variant="secondary"
        title="Seleccione una imagen de la galeria"
        onPress={pickImage}
      />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 220,
    resizeMode: "cover",
    marginVertical: 10,
    borderRadius: 10,
  },
});
