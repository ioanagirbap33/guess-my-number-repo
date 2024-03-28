import { View, StyleSheet, Image, Text } from "react-native";
import { Title } from "../components/ui/Title";
import { Colors } from "../constants/colors";
import { PrimaryButton } from "../components/ui/PrimaryButton";

export const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  return (
    <View style={styles.screen}>
      <Title>Game over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlights}>{roundsNumber}</Text>{" "}
        round to guess the number{" "}
        <Text style={styles.highlights}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlights: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
