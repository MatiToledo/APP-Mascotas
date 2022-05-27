import React, { useEffect } from "react";
import { View } from "react-native";
import MyPetsComp from "../components/MyPets";
import { useDispatch, useSelector } from "react-redux";
import { userPets } from "../store/actions/user.action";

export default function MyPetsScreen(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userPets());
    console.log("useeffect");
  }, []);

  const pets = useSelector((state) => state.user.userPets);
  console.log("useselector", pets);
  return (
    <View style={{ flex: 1 }}>
      {/* {pets.length !== 0 ? (
        <MyPetsComp navigation={props.navigation} pets={pets}></MyPetsComp>
      ) : null} */}
    </View>
  );
}
