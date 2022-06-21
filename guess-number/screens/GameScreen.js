import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";

// create a function generateRandomBetween(min, max , exclude) that returns a random number between min and max (inclusive)  except for the number exclude
function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum;
}

export default function GameScreen({ userNumber }) {
  const [currentGuess, setCurrentGuess] = React.useState(
    generateRandomBetween(1, 100, userNumber)
  );

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        {/* + and - */}
      </View>
      <View>{/* Guess Logs */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
