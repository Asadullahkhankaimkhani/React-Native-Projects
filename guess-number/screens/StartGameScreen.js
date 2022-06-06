import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.center}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardAppearance="dark"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Start</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#72063c",
    borderRadius: 8,
    // Android shadow
    elevation: 8,
    marginHorizontal: 24,
    // IOS shadow
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 1,
    color: "#ddb52f",
    marginVertical: 16,
    fontWeight: "bold",
  },
});
