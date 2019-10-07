import React from "react";
import { StyleSheet, Image } from "react-native";

const Hero = () => (
  <Image style={styles.heroImage} source={require("./img/laptop2.jpg")} />
);
export default Hero;

const styles = StyleSheet.create({
  heroImage: {
    width: undefined,
    height: undefined,
    flex: 8
  }
});
