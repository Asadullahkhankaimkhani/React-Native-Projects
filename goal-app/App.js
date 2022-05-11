import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.aapContainer}>
      <View style={styles.inlineStyle}>
        <TextInput style={styles.inputText} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aapContainer: {
    padding: 50,
  },
  inlineStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputText: {
    width: "80%",
    borderColor: "#cccccc",
    borderWidth: 1,
    marginRight: 8,
  },
});
