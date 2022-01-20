import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RestroItem = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <RestroImage />
        <InfoContainer />
      </View>
    </TouchableOpacity>
  );
};

export default RestroItem;

const RestroImage = () => {
  return (
    <React.Fragment>
      <Image
        style={{
          width: "100%",
          height: 180,
        }}
        source={{
          uri: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        }}
      />
      <TouchableOpacity style={styles.icon}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </React.Fragment>
  );
};

const InfoContainer = () => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>title</Text>
        <Text style={{ fontSize: 12, color: "gray" }}>30-45 . min late</Text>
      </View>
      <View style={styles.number}>
        <Text style={{ fontWeight: "bold" }}>4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "white",
    marginTop: 10,
    padding: 15,
  },
  icon: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {},
  number: {
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    width: 38,
    borderRadius: 50,
  },
});
