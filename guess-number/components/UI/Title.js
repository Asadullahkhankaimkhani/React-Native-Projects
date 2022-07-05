import { StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    marginVertical: 20,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.quaternary,
    color: Colors.quaternary,
    padding: 10,
  },
});
