import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ViewCart = () => {
  const data = useSelector((state) => state.cart.cartItems);

  const price = data?.reduce(
    (acc, item) => acc + Number(item?.price?.slice(1)),
    0
  );
  console.log(data);
  return (
    <React.Fragment>
      {data.length !== 0 && (
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
              view cart ${price}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </React.Fragment>
  );
};

export default ViewCart;

const styles = StyleSheet.create({});
