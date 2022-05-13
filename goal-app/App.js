import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import moment from "moment";

// Components
import GoalItem from "./compoenet/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (goalValue) => {
    setEnteredGoal(goalValue);
  };

  const addGoalHandler = () => {
    setCourseGoal((currentGoal) => [
      ...currentGoal,
      {
        text: enteredGoal,
        id: Math.random().toString(),
        createdAt: moment(Date.now()).format("DD-MM-YYYY"),
      },
    ]);
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
        <FlatList
          data={courseGoal}
          renderItem={(item) => {
            return <GoalItem item={item} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
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
