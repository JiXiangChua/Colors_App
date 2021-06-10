import React from "react";
import { Text, View } from "react-native";

export default function DetailsScreen({ route }) {
  //use {route} to access the received parameters. console.log(route) to see what is passed over.
  //route.params to access the data values received.
  const { red, green, blue } = route.params; //javascript destructuring. destructure the values into const red, green and blue that we can use in this file

  return (
    <View>
      <Text>Red: {red}</Text>
      <Text>Green: {green}</Text>
      <Text>Blue: {blue}</Text>
    </View>
  ); //rmb to use {red} to access javascript variables in react native codes.
}
