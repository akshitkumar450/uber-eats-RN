import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const About = ({ restaurant }) => {
  const formattedText = `${restaurant.categories.join("路")} 路 ${
    restaurant.price
  } 路 馃挵馃挵 路 ${restaurant.rating} 路 馃専馃専路 (${restaurant.reviews}+) `;

  return (
    <View style={{ paddingBottom: 20 }}>
      <RestaurantImage img={restaurant.image_url} />
      <RestaurantTitle text={restaurant.name} />
      <RestaurantDescription text={formattedText} />
    </View>
  );
};

const RestaurantImage = ({ img }) => {
  return (
    <Image
      source={{
        uri: img,
      }}
      style={{
        width: "100%",
        height: 200,
      }}
    />
  );
};
const RestaurantTitle = ({ text }) => {
  return (
    <Text
      style={{
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 10,
        marginHorizontal: 15,
      }}>
      {text}
    </Text>
  );
};
const RestaurantDescription = ({ text }) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}>
      {text}
    </Text>
  );
};

export default About;

const styles = StyleSheet.create({});
