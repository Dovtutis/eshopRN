import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );

  ProductDetailScreen.navigationOptions = (navData) => {
    return {
      headerTitle: navData.navigation.getParam("productTitle"),
    };
  };

  return (
    <ScrollView>
      <View style={styles.itemCard}>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
        <View style={styles.actions}>
          <Button
            color={Colors.primary}
            title="Add to Cart"
            onPress={() => {}}
          />
        </View>
        <Text style={styles.price}>€{selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemCard: {
      padding: 20
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginBottom: 15,
    fontFamily: 'open-sans-bold',
  },
  description: {
    fontSize: 14,
    textAlign: "justify",
    marginHorizontal: 10,
    fontFamily: 'open-sans',
  },
});

export default ProductDetailScreen;
