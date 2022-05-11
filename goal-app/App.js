import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Goal App</Text>
      </View>
      <View>
        <Text style={styles.dummyText}>Hello World!</Text>
      </View>
      <Button title="Go to Goals" onPress={() => console.log("Go to Goals")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "#000",
    padding: 16,
  },
});
