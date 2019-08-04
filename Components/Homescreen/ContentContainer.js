import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import CustomImage from "./CustomImage";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
class ContentContainer extends Component {
  state = {
    news: []
  };
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
  componentDidMount() {
    axios
      .get("https://mixedresponse.herokuapp.com/mixed")
      .then(resp => {
        this.setState({
          news: Object.values(resp.data)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const dataToShow = this.state.news.map(el => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("CategoryDetails", {
              // send params here
            });
          }}
        >
          <View
            style={{
              height: 120,
              width: 190,
              margin: 3
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                source={{
                  uri: el.image
                }}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover"
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: 18,
                marginLeft: 7
              }}
            >
              Here's What's Trending
            </Text>
            <View
              style={{
                height: 120,
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {dataToShow}
              </ScrollView>
            </View>
          </View>
          <View style={{ flex: 3, marginTop: 7 }}>
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: 20,
                marginLeft: 7
              }}
            >
              Explore
            </Text>
            <View style={styles.contentContainer}>
              <View style={styles.news}>
                <CustomImage
                  imageSource={require("../../Assets/Images/news.jpg")}
                  headerText={
                    <Text
                      onPress={() => this.props.navigation.navigate("News")}
                    >
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
                  imageSource={require("../../Assets/Images/Podcasts.jpg")}
                  headerText={
                    <Text
                      onPress={() => {
                        this.props.navigation.navigate("Podcast");
                      }}
                    >
                      {"Podcasts"}
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
                  imageSource={require("../../Assets/Images/auto.jpg")}
                  headerText={
                    <Text
                      onPress={() => {
                        this.props.navigation.navigate("Auto");
                      }}
                    >
                      {"Auto"}
                    </Text>
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
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
  label: {
    fontSize: 18,

    paddingHorizontal: 8
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
