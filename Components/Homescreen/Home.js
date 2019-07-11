import React from "react";
import { StyleSheet, ScrollView, ImageBackground, View } from "react-native";

import Header from "../../Header";
import ContentContainer from "./ContentContainer";

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <ContentContainer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
