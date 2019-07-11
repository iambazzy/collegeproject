import React from "react";
import { StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import ImageOverlay from "./ImageOverlay";

class CustomImage extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <ImageBackground source={this.props.imageSource} style={styles.image}>
          <ImageOverlay headerText={this.props.headerText} />
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 280,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default CustomImage;
