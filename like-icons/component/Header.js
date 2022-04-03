import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ flex: 1, fontSize: 24 }}>Like It</Text>
      <FontAwesome name="heart" size={24} color="red" />
      <Text style={{ fontSize: 24 }}>0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
});

export default Header;
