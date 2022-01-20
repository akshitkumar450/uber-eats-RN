import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const HeaderTab = () => {
  const [select, setSelect] = useState(false);
  return (
    <View style={styles.container}>
      <Buttons
        title="delivery"
        viewStyles={{
          backgroundColor: select ? "black" : "white",
        }}
        textStyles={{
          color: select ? "white" : "black",
        }}
        select={select}
        setSelect={setSelect}
      />

      <Buttons
        title="pickup"
        viewStyles={{
          backgroundColor: select ? "white" : "black",
        }}
        textStyles={{
          color: select ? "black" : "white",
        }}
        select={select}
        setSelect={setSelect}
      />
    </View>
  );
};

const Buttons = ({ title, select, viewStyles, textStyles, setSelect }) => {
  return (
    <TouchableOpacity onPress={() => setSelect(!select)}>
      <View
        style={{
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 100,
          ...viewStyles,
        }}>
        <Text
          style={{
            fontSize: 16,
            ...textStyles,
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
