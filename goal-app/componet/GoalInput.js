import React from "react";
import { TextInput, StyleSheet, Button, View, Modal } from "react-native";

const GoalInput = ({ goalInputHandler, addGoalHandler, showModal }) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inlineStyle}>
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
