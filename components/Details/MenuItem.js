import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { foods } from "./foodData";
const MenuItem = () => {
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
