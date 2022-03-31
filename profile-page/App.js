import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar_container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("./assets/batman-avatar.png")}
            style={{ marginBottom: 10 }}
          />
          <Text style={{ maxWidth: 200 }}>
            "It's not who I am underneath, but what I do that defines me"
          </Text>
        </View>
      </View>
      <View style={styles.details_container}>
        <View style={styles.item}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.data}>Batman</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>City</Text>
          <Text style={styles.data}>Gotham</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Profession</Text>
          <Text style={styles.data}>Police</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Skills</Text>
          <Text style={styles.data}>Killer</Text>
        </View>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  details_container: {
    backgroundColor: "#fff",
    flex: 0.6,
  },
  item: {
    flex: 0.25,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 32,
    flex: 0.9,
    color: "orange",
  },
  data: {
    fontSize: 32,
  },
});
