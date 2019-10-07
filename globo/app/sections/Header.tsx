import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

const Header = ({ message }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleUser = () => {
    setLoggedIn(!isLoggedIn);
  };

  let display = isLoggedIn ? "Sample User" : message;
  return <Text onPress={toggleUser}>{display}</Text>;
};
export default Header;