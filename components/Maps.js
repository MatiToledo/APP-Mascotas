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
import MapView, { Marker } from "react-native-maps";
import { mapSearch } from "../lib/api";

import MyButton from "../ui/Button";

export default function Maps(props) {
  const [location, setLocation] = useState("");
  // const [lat, setLat] = useState(-31.409593);
  // const [lng, setLng] = useState(-64.193721);
  const [marker, setMarker] = useState(null);
  const initialRegion = {
    latitude: -31.409593,
    longitude: -64.193721,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function handleLocation(t) {
    setLocation(t);
  }

  async function handleSearch() {
    const results = await mapSearch(location);

    if (!results.results[0]) {
      Alert.alert(
        "No encontramos ninguna ubicación con esa dirección, intente nuevamente"
      );
    } else {
      const result = results.results[0];
      const lat = result.geometry.location.lat;
      const lng = result.geometry.location.lng;
      setMarker({
        lat,
        lng,
      });

      props.handleGeoData({
        petUbication: location,
        lastlocationLat: lat,
        lastlocationLng: lng,
      });
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.search}>
        <View style={styles.input}>
          <Text style={styles.label}>Dirección</Text>
          <TextInput
            style={styles.textInput}
            placeholder="  Busque una dirección"
            value={location}
            onChangeText={handleLocation}
          ></TextInput>
        </View>
        <MyButton
          variant="secondary"
          onPress={handleSearch}
          title="Buscar"
        ></MyButton>
        <MapView
          region={
            marker !== null
              ? {
                  latitude: marker.lat,
                  longitude: marker.lng,
                  latitudeDelta: 0.0054,
                  longitudeDelta: 0.0054,
                }
              : null
          }
          style={styles.map}
        >
          {marker !== null ? (
            <Marker
              coordinate={{
                latitude: marker.lat,
                longitude: marker.lng,
              }}
            ></Marker>
          ) : null}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    // flexDirection: "row",
    flex: 1,
  },
  input: {
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
  map: {
    width: 300,
    height: 220,
    marginVertical: 15,
  },
});
