import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { StartGameScreen } from "./screens/StartGameScreen";

export default function App() {
  return (
    <View>
      <StartGameScreen />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
