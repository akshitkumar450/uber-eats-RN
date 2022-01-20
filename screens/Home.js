import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderTab from "../components/HeaderTab";
import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderTab />
      <Searchbar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#eee",
  },
});
