import React, { Component } from "react";
import { View, Text, StyleSheet, Linking, ScrollView } from "react-native";
import { Card, CardItem, Thumbnail, Left, Body } from "native-base";
import CustomImage from "../Movies/CustomImage";
class MovieDetails extends Component {
  static navigationOptions = {
    title: null,
    gesturesEnabled: true,
    gestureResponseDistance: {
      horizontal: 150,
      vertical: 150
    }
  };
  render() {
    var { navigation } = this.props;
    const movieName = navigation.getParam("movieName");
    const content = navigation.getParam("content");
    const year = navigation.getParam("year");
    const rating = navigation.getParam("rating");
    const trailerThumbnail = navigation.getParam("trailerThumbnail");
    const budget = navigation.getParam("budget");
    const trailer = navigation.getParam("trailer");
    const poster = navigation.getParam("poster");
    return (
      <ScrollView>
        <View>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail square large source={{ uri: poster }} />
                <Body>
                  <Text>{movieName}</Text>
                  <Text note>{year}</Text>
                  <Text note>{rating}/10</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <CardItem>
                <View>
                  <CustomImage
                    imageSource={{ uri: trailerThumbnail }}
                    headerText={
                      <Text onPress={() => Linking.openURL(trailer)}>
                        {"Watch Trailer"}
                      </Text>
                    }
                  />
                </View>
              </CardItem>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{budget}</Text>
                <Text>{content}</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default MovieDetails;
