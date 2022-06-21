import { StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

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
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.center}>
      <ImageBackground
        source={require("./assets/image/background.png")}
        resizeMode="cover"
        style={styles.center}
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
