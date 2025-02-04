import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <LottieView
          style={styles.lottie}
          source={require("../assets/Animation - 1738654585887.json")}
          autoPlay
          loop
          
        />
        <Text>Welcome Home!</Text>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lottie: {
    height: width * 0.9,
    width: width,
  },
});
