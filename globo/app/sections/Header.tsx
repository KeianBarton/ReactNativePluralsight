import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = ({ message }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleUser = () => {
    setLoggedIn(!isLoggedIn);
  };

  let display = isLoggedIn ? "Sample User" : message;
  return (
    <View style={styles.headStyle}>
      <Image
        style={styles.logoStyle}
        source={require("./img/Globo_logo_REV.png")}
      />
      <Text style={styles.headText} onPress={toggleUser}>
        {display}
      </Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "#FFFFFF",
    fontSize: 20,
    flex: 1
  },
  headStyle: {
    paddingTop: 30, // accounting for phone status bar
    paddingRight: 10,
    backgroundColor: "#35605A",
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#000000"
  },
  logoStyle: {
    flex: 1,
    width: undefined, // Makes sure image uses flex settings
    height: undefined // Makes sure image uses flex settings
  }
});
