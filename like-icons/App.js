import { StyleSheet, SafeAreaView, View } from "react-native";
import Header from "./component/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0CEE2",
  },

  body: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
});
