import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { StartGameScreen } from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#6a0337", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/image/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backroundImage: {
    opacity: 0.15,
  },
});
