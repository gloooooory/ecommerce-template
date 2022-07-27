import { StyleSheet, Image, Text, View, StatusBar } from "react-native";
import React from "react";
import SuccessImage from "../../assets/image/success.png";
import CustomButton from "../../components/CustomButton";
const OrderConfirmScreen = ({ navigation }) => {
  //   setTimeout(() => {
  //     navigation.replace("tab");
  //   }, 4000);

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.imageConatiner}>
        <Image source={SuccessImage} style={styles.Image} />
      </View>
      <Text style={styles.secondaryText}>Order has be confirmed</Text>
      <View>
        <CustomButton
          text={"Back to Home"}
          onPress={() => navigation.replace("tab")}
        />
      </View>
    </View>
  );
};

export default OrderConfirmScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirecion: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 40,
    flex: 1,
  },
  imageConatiner: {
    width: "100%",
  },
  Image: {
    width: 400,
    height: 300,
  },
  secondaryText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
