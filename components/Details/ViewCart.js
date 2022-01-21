import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ViewCart = () => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        position: "absolute",
        bottom: 30,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          padding: 13,
          borderRadius: 30,
          width: 200,
        }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
          }}>
          view cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewCart;

const styles = StyleSheet.create({});
