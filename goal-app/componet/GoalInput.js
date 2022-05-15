import React from "react";
import {
  TextInput,
  StyleSheet,
  Button,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  showModal,
  onCancel,
}) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inlineStyle}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          <Button title="Cancel" onPress={onCancel} color="#f31282" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inlineStyle: {
    flex: 1,
    backgroundColor: "#311b6b",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  inputText: {
    width: "90%",
    borderColor: "#e4d0ff",
    borderWidth: 1,
    marginRight: 8,
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
