import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";
import db from "../../firebase";

const ViewCart = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const data = useSelector((state) => state.cart.cartItems);

  const price = data?.reduce(
    (acc, item) => acc + Number(item?.price?.slice(1)),
    0
  );

  const addToDb = async () => {
    await db.collection("orders").add({
      cartItems: data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
    navigation.navigate("Orders");
  };
  return (
    <React.Fragment>
      {data.length !== 0 && (
        <View
          style={{
            width: "100%",
            alignItems: "center",
            position: "absolute",
            bottom: 30,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: 13,
              borderRadius: 30,
              width: 200,
            }}
            onPress={() => setModalVisible(true)}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
              }}>
              view cart ${price}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <CustomModal
        data={data}
        price={price}
        addToDb={addToDb}
        modalVisible={modalVisible}
        navigation={navigation}
        setModalVisible={setModalVisible}
      />
    </React.Fragment>
  );
};

export default ViewCart;

const CustomModal = ({
  setModalVisible,
  modalVisible,
  price,
  data,
  navigation,
  addToDb,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      // this will run when click back btn
      onRequestClose={() => setModalVisible(!modalVisible)}
      style={{
        position: "relative",
      }}>
      <View style={styles.centeredView}>
        <ListItems data={data} price={price} />
        <BtnCheckout addToDb={addToDb} price={price} navigation={navigation} />
        <BtnClose setModalVisible={setModalVisible} />
      </View>
    </Modal>
  );
};

const ListItems = ({ data, price }) => (
  <View style={styles.modalView}>
    <Text style={styles.modalHeading}> Restaurant Items</Text>
    {data.map((item, idx) => (
      <View key={idx} style={styles.listContainer}>
        <Text style={styles.listText}>{item.title}</Text>
        <Text style={styles.listText}>{item.price}</Text>
      </View>
    ))}

    <View style={{ borderTopWidth: 2, width: "100%" }}></View>

    <View style={styles.listContainer}>
      <Text style={styles.listText}>SubTotal</Text>
      <Text style={styles.listText}>${price}</Text>
    </View>
  </View>
);

const BtnClose = ({ setModalVisible }) => (
  <TouchableOpacity
    style={styles.btnClose}
    onPress={() => setModalVisible(false)}>
    <View>
      <Text
        style={{
          fontSize: 20,
          color: "white",
        }}>
        X
      </Text>
    </View>
  </TouchableOpacity>
);

const BtnCheckout = ({ price, addToDb, navigation }) => (
  <View style={styles.btnCheckout}>
    <TouchableOpacity onPress={() => addToDb()}>
      <Text
        style={{
          color: "white",
          fontSize: 16,
        }}>
        Checkout ${price}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
    backgroundColor: "white",
    // for postion the whole modal at bottom
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 20,
    borderTopWidth: 2,
    borderTopColor: "gray",
  },

  modalView: {
    width: "100%",
    paddingHorizontal: 10,
  },

  // checkout btn
  btnCheckout: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 50,
    width: 180,
    alignItems: "center",
    marginTop: 20,
  },

  modalHeading: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  // for list items
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  listText: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  // close btn
  btnClose: {
    position: "absolute",
    right: 10,
    top: 5,
    backgroundColor: "black",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
