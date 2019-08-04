import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import Video from "react-native-video";

export default class PodPlay extends Component {
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
    const audioLink = navigation.getParam("podLink");
    const title = navigation.getParam("title");
    const story = navigation.getParam("story");
    return (
      <View>
        <Card>
          <CardItem>
            <Body>
              <Text
                style={{
                  fontWeight: "bold",
                  justifyContent: "space-around"
                }}
              >
                {title}
              </Text>
            </Body>
          </CardItem>
          <CardItem cardBody>
            <Video
              source={{
                uri: audioLink
              }}
              ref={ref => {
                this.player = ref;
              }}
              controls={true}
              onBuffer={this.onBuffer}
              onError={this.videoError}
              style={{ width: "100%", height: 300 }}
            />
          </CardItem>

          <CardItem>
            <Body>
              <Text>{story}</Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}
