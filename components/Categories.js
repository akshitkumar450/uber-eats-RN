import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import shopBag from "../assets/images/shopping-bag.png";
import softDrink from "../assets/images/soft-drink.png";
import bread from "../assets/images/bread.png";
import fastFood from "../assets/images/fast-food.png";
import coffee from "../assets/images/coffee.png";
import deals from "../assets/images/deals.png";
import desserts from "../assets/images/desserts.png";
const items = [
  {
    image: shopBag,
    text: "Pick-up",
  },
  {
    image: softDrink,
    text: "Soft Drinks",
  },
  {
    image: bread,
    text: "Bakery Items",
  },
  {
    image: fastFood,
    text: "Fast Foods",
  },
  {
    image: deals,
    text: "Deals",
  },
  {
    image: coffee,
    text: "Coffee & Tea",
  },
  {
    image: desserts,
    text: "Desserts",
  },
];
const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, idx) => (
          <View key={idx} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
              source={item.image}
            />
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
