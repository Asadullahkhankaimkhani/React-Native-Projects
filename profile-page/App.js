import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar_container}>
        <View>
          <Image source={require("./assets/batman-avatar.png")} />
        </View>
      </View>
      <View style={styles.details_container}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  avatar_container: {
    flex: 0.4,
  },
  details_container: {
    backgroundColor: "#fff",
    flex: 0.6,
  },
});
