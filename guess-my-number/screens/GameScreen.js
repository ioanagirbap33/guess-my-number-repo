import { Text, View, StyleSheet } from "react-native";
import { Title } from "../components/Title";
export const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
