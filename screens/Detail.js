import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import About from "../components/Details/About";
import MenuItem from "../components/Details/MenuItem";

const Detail = () => {
  return (
    <View>
      <About />
      <MenuItem />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
