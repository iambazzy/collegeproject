import React, { Component } from "react";
import { Image, Linking } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";

export default class AutoDetails extends Component {
  static navigationOptions = {
    title: null,
    gesturesEnabled: true,
    gestureResponseDistance: {
      horizontal: 150,
      vertical: 150
    }
  };
  render() {
    const { navigation } = this.props;
    const imageId = navigation.getParam("image");
    const title = navigation.getParam("title");
    const content = navigation.getParam("content");

    return (
      <Container>
        <Content padder>
          <Card style={{ flex: 1 }}>
            <CardItem>
              <Left>
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
              </Left>
            </CardItem>

            <Image source={{ uri: imageId }} style={{ flex: 1, height: 250 }} />

            <CardItem>
              <Body>
                <Text style={{ justifyContent: "space-around" }}>
                  {content}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
