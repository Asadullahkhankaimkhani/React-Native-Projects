import { Image, View, StyleSheet, Text } from "react-native";
import React from "react";
import Title from "../components/UI/Title";

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
      <Text>Your phone needed X rounds to guess the number Y.</Text>
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
});
