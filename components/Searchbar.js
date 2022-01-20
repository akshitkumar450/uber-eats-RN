import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Searchbar = ({ setCity }) => {
  const cityHandler = (city) => {
    setCity(city);
  };
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="search"
        // item which we will select from searchbar options
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        styles={{
          textInput: {
            fontSize: 16,
            borderRadius: 20,
            backgroundColor: "#eee",
            marginTop: 7,
            color: "black",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            marginHorizontal: 10,
            borderRadius: 50,
            alignItems: "center",
          },
        }}
        // for showing left side component inside textInput
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location" size={24} />
          </View>
        )}
        // for showing right side component inside textInput
        renderRightButton={() => (
          <View style={styles.right}>
            <AntDesign name="clockcircle" size={24} />
            <Text style={{ marginLeft: 5 }}>search</Text>
          </View>
        )}
        // get this key from google cloud
        query={{
          key: "AIzaSyAU5J_Itq38dRC87ij5XUb2k6xaZafuKhE",
        }}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 20,
    backgroundColor: "white",
  },
  right: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    padding: 5,
    marginRight: 10,
    borderRadius: 50,
  },
});
