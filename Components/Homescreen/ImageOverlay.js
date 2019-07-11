import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ImageOverlay extends React.Component {
  render() {
    let header = this.props.headerText ? this.props.headerText : null;
    return (
      <View>
        <Text style={styles.overlayHeader}>{header}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayHeader: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    borderRadius: 3,
    elevation: 1.0,

    alignSelf: "center",
    fontSize: 22,
    color: "white",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    fontWeight: "bold"
  }
});
