import { View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Start</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
}
