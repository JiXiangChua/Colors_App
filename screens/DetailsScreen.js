import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  //use {route} to access the received parameters. console.log(route) to see what is passed over.
  //route.params to access the data values received.
  const { red, green, blue } = route.params; //javascript destructuring. destructure the values into const red, green and blue that we can use in this file
  const avgColor = (red + green + blue) / 3;
  const textColor = avgColor < 100 ? "white" : "black";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)` },
      ]}
    >
      <Text style={{ color: textColor }}>Red: {red}</Text>
      <Text style={{ color: textColor }}>Green: {green}</Text>
      <Text style={{ color: textColor }}>Blue: {blue}</Text>
    </View>
  ); //rmb to use {red} to access javascript variables in react native codes.
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
