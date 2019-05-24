import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onPressItem}>
    <View style={styles.listItem}>
      <Image style={styles.image} source={props.image} />
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#ffbd5b",
    alignItems: "center"
  },
  image: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default ListItem;
