import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Card from "../UI/Card";

const ProductItem = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "andoird" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableComponent onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>€{props.price}</Text>
            </View>
            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableComponent>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 300,
    margin: 20,
    padding: 10,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginVertical: 4,
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    paddingHorizontal: 10,
  },
  details: {
    alignItems: "center",
    height: "20%",
    padding: 10,
  },
});

export default ProductItem;
