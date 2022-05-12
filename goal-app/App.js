import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (goalValue) => {
    setEnteredGoal(goalValue);
  };

  const addGoalHandler = () => {
    //
    console.log(enteredGoal);
  };

  return (
    <View style={styles.aapContainer}>
      <View style={styles.inlineStyle}>
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aapContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inlineStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  inputText: {
    width: "70%",
    borderColor: "#cccccc",
    borderWidth: 1,
    marginRight: 8,
  },
  goalContainer: {
    flex: 10,
  },
});
