import { Text, View, StyleSheet } from "react-native";
export const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Oponent's Guess</Text>
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
