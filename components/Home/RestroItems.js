import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

const RestroItems = ({ data, navigation }) => {
  return (
    <React.Fragment>
      {data.map((restaurant, idx) => (
        <TouchableOpacity
          key={idx}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Detail")}>
          <View style={styles.container}>
            <RestroImage img={restaurant.image_url} />
            <InfoContainer name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </React.Fragment>
  );
};

export default RestroItems;

const RestroImage = ({ img }) => {
  return (
    <React.Fragment>
      <Image
        style={{
          width: "100%",
          height: 180,
        }}
        source={{
          uri: img,
        }}
      />
      <TouchableOpacity style={styles.icon}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </React.Fragment>
  );
};

const InfoContainer = ({ name, rating }) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
        <Text style={{ fontSize: 12, color: "gray" }}>30-45 . min late</Text>
      </View>
      <View style={styles.number}>
        <Text style={{ fontWeight: "bold" }}>{rating}</Text>
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
