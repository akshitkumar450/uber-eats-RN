import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import bg1 from "../../assets/images/bg1.jpg";

const About = () => {
  return (
    <View>
      <RestaurantImage img={bg1} />
      <RestaurantTitle text="Farmhouse Kitchen Thai cuisine" />
      <RestaurantDescription text="FThai.Comfort food.$5. 4*. (292+)" />
    </View>
  );
};

const RestaurantImage = ({ img }) => {
  return (
    <Image
      source={img}
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
