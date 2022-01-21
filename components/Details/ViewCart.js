import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/actions.js/actions";
import { useSelector } from "react-redux";

const ViewCart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.items);
  console.log(data);
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        position: "absolute",
        bottom: 30,
      }}>
      <TouchableOpacity
        onPress={() => dispatch(addItem("helos"))}
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
