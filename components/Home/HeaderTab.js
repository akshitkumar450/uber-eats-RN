import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const HeaderTab = ({ active, setActive }) => {
  return (
    <View style={styles.container}>
      <Buttons title="delivery" active={active} setActive={setActive} />
      <Buttons title="pickup" active={active} setActive={setActive} />
    </View>
  );
};

const Buttons = ({ title, active, setActive }) => {
  return (
    <TouchableOpacity onPress={() => setActive(title)}>
      <View
        style={{
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 100,
          backgroundColor: active === title ? "black" : "white", //if the current item is selected then it will be highlighted
        }}>
        <Text
          style={{
            fontSize: 16,
            color: active === title ? "white" : "black",
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
});
