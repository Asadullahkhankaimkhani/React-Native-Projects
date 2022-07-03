import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    // Android shadow
    elevation: 8,
    marginHorizontal: 24,
    // IOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
});

export default Card;
