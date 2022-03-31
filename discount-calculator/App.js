import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainHeadingContainer}>
        <Text style={styles.mainHeading}>Discount Calculator</Text>
      </View>
      <View style={{ marginHorizontal: 40, marginTop: 40, marginBottom: 20 }}>
        <Text style={{ marginBottom: 10 }}>Amount</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setPrice(e)}
          keyboardType="numeric"
        />
      </View>
      <View style={{ marginHorizontal: 40 }}>
        <Text style={{ marginBottom: 10 }}>Discount (%)</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setDiscount(e)}
          keyboardType="numeric"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Keyboard.dismiss();
            setResult((price * discount) / 100);
          }}
        >
          <Text style={{ color: "white" }}>Calculate</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.result}>The amount after discount:</Text>
        <Text style={{ marginTop: 20 }}>{price - result}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  mainHeadingContainer: { alignItems: "center", marginTop: 40 },
  mainHeading: {
    fontSize: 30,
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "darkblue",
    borderRadius: 10,
  },
  result: { marginTop: 20, fontSize: 20, color: "green" },
});
