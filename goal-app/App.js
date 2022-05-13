import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import moment from "moment";

// Component
import GoalItem from "./componet/GoalItem";
import GoalInput from "./componet/GoalInput";

export default function App() {
  // States
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
    setEnteredGoal("");
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />

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
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalContainer: {
    flex: 10,
  },
});
