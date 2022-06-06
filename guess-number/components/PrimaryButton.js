import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={() => console.log("Working")}
        android_ripple={{ color: "red" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    marginVertical: 8,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72064a",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});