import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { Colors } from "../constants";

export default function StartGameScreen({ onStartGame, selectedNumber }) {
  const [enteredValue, setEnteredValue] = useState("");

  const onInputChange = (inputText) => {
    setEnteredValue(inputText);
  };

  const resetInput = () => {
    setEnteredValue("");
  };

  const confirmInput = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 100) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 100.", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    onStartGame(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardAppearance="dark"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredValue}
        onChangeText={onInputChange}
      />
      <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    // Android shadow
    elevation: 8,
    marginHorizontal: 24,
    // IOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    color: Colors.secondary,
    marginVertical: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
});
