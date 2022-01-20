import { StyleSheet, Text, View } from "react-native";
import React from "react";
import About from "../components/Details/About";
import MenuItem from "../components/Details/MenuItem";

const Detail = ({ route, navigation }) => {
  // console.log(route.params.restaurant);
  return (
    <View>
      <About restaurant={route.params.restaurant} />
      <MenuItem />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
