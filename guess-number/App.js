import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { Colors } from "./constants";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const gameOverHandler = () => {
    setGameOver(true);
  };

  const selectedNumberHandler = (number) => {
    setSelectedNumber(number);
    setGameOver(false);
  };

  let screen = (
    <StartGameScreen
      selectedNumber={selectedNumber}
      onStartGame={selectedNumberHandler}
    />
  );
  if (selectedNumber) {
    screen = (
      <GameScreen userNumber={selectedNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameOver && selectedNumber) {
    screen = <GameOverScreen />;
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
    // Center
  },
  backgroundImage: {
    opacity: 0.25,
    flex: 1,
  },
});
