import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import About from "../components/Details/About";
import MenuItem from "../components/Details/MenuItem";
import ViewCart from "../components/Details/ViewCart";

const Detail = ({ route, navigation }) => {
  // console.log(route.params.restaurant);
  return (
    <View style={styles.container}>
      <About restaurant={route.params.restaurant} />
      <MenuItem />
      <ViewCart />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
