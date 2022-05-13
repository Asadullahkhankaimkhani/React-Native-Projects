import React from "react";
import { View, StyleSheet, Text } from "react-native";

const GoalItem = ({ item }) => {
  return (
    <View style={styles.listBox}>
      <Text style={{ color: "white" }}> {item.item.text}</Text>
      <Text style={{ color: "white" }}> {item.item.createdAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    backgroundColor: "#5e0acc",
    borderRadius: 20,
  },
});

export default GoalItem;
