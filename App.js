import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import DetailsScreen from "./screens/DetailsScreen";

function HomeScreen({ navigation }) {
  const [colors, setColors] = useState([
    //useState will return you 2 things, a state variable and a setter for the state variable. But written in javascript destructuring format.
    //Inside here is the inital values of the state.
    { red: 255, green: 0, blue: 0, id: "0" },
    { red: 0, green: 255, blue: 0, id: "1" },
    { red: 0, green: 0, blue: 255, id: "2" },
  ]); //starts with a default array of colors

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => {
          //console.log("You clicked a color");

          navigation.navigate("Details", {
            red: item.red,
            green: item.green,
            blue: item.blue,
          }); //or you can pass in "...item" to pass in the props in item
          //first parameter is the stack screen name that you want to go to
          //2nd parameter is the data that you want send over from app.js to detailsScreen.js
        }}
      >
        <BlockRGB red={item.red} green={item.green} blue={item.blue} />
      </TouchableOpacity>
    );
  }

  function addColor() {
    setColors([
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: `${colors.length}`,
      },
      ...colors,
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={addColor} title="Add Color" />
      <FlatList //a flatlist must take in a data and a renderItem
        style={{ width: "100%" }}
        data={colors}
        renderItem={renderItem}
      />
      <Button onPress={() => setColors([])} title="Reset Color" />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
