import React from "react";
import { TextInput, StyleSheet, Button, View, Modal } from "react-native";

const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  showModal,
  onCancel,
}) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inlineStyle}>
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inlineStyle: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  inputText: {
    width: "90%",
    borderColor: "#cccccc",
    borderWidth: 1,
    marginRight: 8,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default GoalInput;
