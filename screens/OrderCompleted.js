import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import MenuItem from "../components/Details/MenuItem";
import LottieView from "lottie-react-native";

const OrderCompleted = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const unsub = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        let temp = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
          temp.push({ ...doc.data() });
        });
        // getting only the last recent order as we are ordering by created at by desc
        // setOrders(temp[0]);

        // or use limit(1)
        setOrders(temp);
      });
    return () => {
      unsub();
    };
  }, []);

  //   console.log(orders?.[0]?.cartItems);
  const price = orders?.[0]?.cartItems?.reduce(
    (acc, item) => acc + Number(item?.price?.slice(1)),
    0
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}>
      {/**green checkmark */}
      <LottieView
        style={{ height: 100, alignSelf: "center" }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={true}
      />
      <Text style={styles.text}>Order with total of ${price}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*reusing the menuitem component */}
        <MenuItem orders={orders?.[0]?.cartItems} checkBox={false} />

        {/*animation at end
        
           <View
          style={{
            padding: 20,
          }}>
          <LottieView
            style={{
              height: 150,
              alignSelf: "center",
            }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </View>*/}
      </ScrollView>
    </View>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
  },
});
