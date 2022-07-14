import { Image, View, StyleSheet, Text } from "react-native";
import React from "react";
import Title from "../components/UI/Title";
import { Colors } from "../constants";
import PrimaryButton from "../components/UI/PrimaryButton";

export default function GameOverScreen() {
  return (
    <View style={styles.rootConatiner}>
      <Title>GameOverScreen</Title>
      <View style={styles.imageConatiner}>
        <Image
          style={styles.image}
          source={require("../assets/image/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number <Text style={styles.highlight}>Y</Text>.
      </Text>
      <PrimaryButton>Start a New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootConatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageConatiner: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 3,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});
