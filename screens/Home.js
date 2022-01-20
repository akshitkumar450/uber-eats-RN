import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderTab from "../components/HeaderTab";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import RestroItems, { localRestaurants } from "../components/RestroItems";

const Home = () => {
  const [data, setData] = useState(localRestaurants);
  return (
    <View style={styles.container}>
      <View>
        <HeaderTab />
        <Searchbar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestroItems data={data} />
      </ScrollView>
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
