import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { foods } from "./foodData";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Redux/actions.js/actions";
const MenuItem = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cartItems);

  //to check the check the items automatically when we leave the page and come back
  // to check whether the current food is in the cart ,,if it is in the cart then the checkbox will be checked when we leave page and come back
  const foodInCart = (currFood) => {
    return Boolean(data.find((item) => item.title === currFood.title));
  };
  console.log(data);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((data, idx) => (
        <View key={idx} style={styles.container}>
          <View
            style={{
              flex: 0.1,
            }}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              // if we select Checked will be true else false
              onPress={(Checked) => dispatch(addItem(data, Checked))}
              isChecked={foodInCart(data)}
            />
          </View>
          <View
            style={{
              justifyContent: "space-evenly",
              flex: 0.6,
              paddingRight: 13,
            }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
              }}>
              {data.title}
            </Text>
            <Text>{data.description}</Text>
            <Text>{data.price}</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignItems: "center",
            }}>
            <Image
              source={{
                uri: data.image,
              }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    paddingRight: 15,
    paddingLeft: 10,
    paddingVertical: 10,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 0.2,
    marginVertical: 10,
  },
});
