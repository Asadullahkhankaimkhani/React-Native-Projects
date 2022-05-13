import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, removeGoalHandler }) => {
  return (
    <View style={styles.listBox}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={removeGoalHandler.bind(this, item.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={{ color: "white", padding: 8 }}> {item.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listBox: {
    borderWidth: 1,
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
