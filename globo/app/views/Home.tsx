import React from "react";
import { Text, View } from "react-native";
import Header from "../sections/Header";

const Home = () => (
  <View>
    <Text>This will be the Homepage</Text>
    <Text>These other lines are here</Text>
    <Text>So you can see the text in the app</Text>
    <Header message="Press to Login" />
  </View>
);
export default Home;