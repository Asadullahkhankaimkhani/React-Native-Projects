import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.center}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    color: "#cccc",
  },
});
