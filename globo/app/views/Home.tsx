import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../sections/Header";
import Hero from "../sections/Hero";

const Home = () => (
  <View style={styles.container}>
    <Header message="Press to Login" />
    <Hero />
    <Text style={{flex:6}}>These other lines are here</Text>
  </View>
);
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // e.g. flexDirection: "row"
    // alignItems  aligns items with the secondary axis (which is opposite to the primary flex direction axis)
  }
});