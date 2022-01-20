import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const BottomTab = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 5,
      }}>
      <Icon name="home" text="home" />
      <Icon name="search" text="search" />
      <Icon name="shopping-bag" text="shop" />
      <Icon name="paper" text="orders" />
      <Icon name="user" text="user" />
    </View>
  );
};

const Icon = ({ name, text }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          justifyContent: "space-between",
          height: "100%",
        }}>
        <FontAwesome style={{ alignSelf: "center" }} name={name} size={24} />
        <Text style={{ fontWeight: "bold" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default BottomTab;

const styles = StyleSheet.create({});
