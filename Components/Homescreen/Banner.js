import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

export default class Banner extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../images/news.jpg")}
        style={styles.banner}
      />
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderBottomWidth: 2,
    borderBottomColor: "black"
  }
});
