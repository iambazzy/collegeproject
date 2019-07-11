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

export default class Detail extends Component {
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
    const link = navigation.getParam("link");
    const author = navigation.getParam("author");
    const readmore = navigation.getParam("readmore");

    return (
      <Container>
        <Content padder>
          <Image source={{ uri: imageId }} style={{ flex: 1, height: 250 }} />
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
                  <Text note style={{ justifyContent: "space-around" }}>
                    {author}
                  </Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={{ justifyContent: "space-around" }}>
                  {content}
                </Text>
              </Body>
            </CardItem>

            {readmore ? (
              <CardItem>
                <Left>
                  <Button
                    transparent
                    textStyle={{ color: "blue" }}
                    onPress={() => Linking.openURL(link)}
                  >
                    <Icon name="md-browsers" />
                    <Text>Read More</Text>
                  </Button>
                </Left>
              </CardItem>
            ) : null}
          </Card>
        </Content>
      </Container>
    );
  }
}
