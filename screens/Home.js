import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTab from "../components/Home/HeaderTab";
import Searchbar from "../components/Home/Searchbar";
import Categories from "../components/Home/Categories";
import RestroItems, { localRestaurants } from "../components/Home/RestroItems";
import BottomTab from "../components/Home/BottomTab";
const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

const Home = () => {
  const [data, setData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [active, setActive] = useState("delivery");
  // useEffect(() => {
  //   const getRestaurantsFromYelp = async () => {
  //     const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  //     const apiOptions = {
  //       headers: {
  //         Authorization: `Bearer ${YELP_API_KEY}`,
  //       },
  //     };
  //     try {
  //       const response = await fetch(yelpUrl, apiOptions);
  //       const data = await response.businesses;
  //       console.log(data);
  //        data.filter((business) =>
  //        business.transactions.includes(active.toLowerCase())
  //       );
  //     } catch (err) {
  //       alert(err.message);
  //     }
  //   };
  //   getRestaurantsFromYelp();
  // }, [city,active]);

  return (
    <View style={styles.container}>
      <View>
        <HeaderTab active={active} setActive={setActive} />
        <Searchbar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestroItems data={data} />
      </ScrollView>
      <View>
        <BottomTab />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#eee",
  },
});
