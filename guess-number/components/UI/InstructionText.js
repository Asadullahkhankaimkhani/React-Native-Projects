import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    color: Colors.secondary,
  },
});

export default InstructionText;
