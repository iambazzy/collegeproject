import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import CustomImage from "./CustomImage";
import { ScrollView } from "react-native-gesture-handler";

class ContentContainer extends Component {
  static navigationOptions = {
    title: "Simplify",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontFamily: "consolas"
    },
    headerStyle: {
      backgroundColor: "white"
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.news}>
            <CustomImage
              imageSource={require("../../Assets/Images/news.jpg")}
              headerText={
                <Text onPress={() => this.props.navigation.navigate("News")}>
                  {"News"}
                </Text>
              }
            />
          </View>

          <View style={styles.videos}>
            <CustomImage
              imageSource={require("../../Assets/Images/videocam.jpg")}
              headerText={
                <Text
                  onPress={() => {
                    this.props.navigation.navigate("Videos");
                  }}
                >
                  {"Videos"}
                </Text>
              }
            />
          </View>
          <View style={styles.music}>
            <CustomImage
              imageSource={require("../../Assets/Images/marshall.jpg")}
              headerText={
                <Text
                  onPress={() => {
                    this.props.navigation.navigate("Music");
                  }}
                >
                  {"Music"}
                </Text>
              }
            />
          </View>
          <View style={styles.movies}>
            <CustomImage
              imageSource={require("../../Assets/Images/moviepic.jpg")}
              headerText={
                <Text
                  onPress={() => {
                    this.props.navigation.navigate("Movies");
                  }}
                >
                  {"Movies"}
                </Text>
              }
            />
          </View>
          <View style={styles.crypto}>
            <CustomImage
              imageSource={require("../../Assets/Images/crypto.jpg")}
              headerText={
                <Text
                  onPress={() => {
                    this.props.navigation.navigate("Cryptocurrency");
                  }}
                >
                  {"CryptoCurrency"}
                </Text>
              }
            />
          </View>
          <View style={styles.petrol}>
            <CustomImage
              imageSource={require("../../Assets/Images/oil.jpg")}
              headerText={<Text>{"Oil & Gas"}</Text>}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 3
  },
  news: {
    width: "100%",
    padding: 3
  },
  videos: {
    flex: 1,
    padding: 3
  },
  music: {
    flex: 1,
    padding: 3
  },
  movies: {
    width: "100%",
    padding: 3
  },
  crypto: {
    flex: 1,
    padding: 3
  },
  petrol: {
    flex: 1,
    padding: 3,
    flexWrap: "wrap"
  }
});

export default ContentContainer;
