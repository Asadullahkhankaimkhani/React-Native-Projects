import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import moment from "moment";

// Component
import GoalItem from "./componet/GoalItem";
import GoalInput from "./componet/GoalInput";

export default function App() {
  // States
  const [showModel, setShowModel] = useState(false);
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
    setShowModel(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== goalId);
    });
  };

  const handleModel = () => {
    setShowModel(!showModel);
  };

  return (
    <View style={styles.appContainer}>
      {showModel && (
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          showModel={showModel}
        />
      )}
      <Button title="Add Goal" onPress={handleModel} />

      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(item) => {
            return (
              <GoalItem item={item} removeGoalHandler={removeGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
    flex: 5,
  },
});
