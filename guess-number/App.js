import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const selectedNumberHandler = (number) => {
    setSelectedNumber(number);
  };

  let screen = (
    <StartGameScreen
      selectedNumber={selectedNumber}
      onStartGame={selectedNumberHandler}
    />
  );
  if (selectedNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.center}
    >
      <ImageBackground
        source={require("./assets/image/background.png")}
        resizeMode="cover"
        style={styles.center}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.center}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
    flex: 1,
  },
});
