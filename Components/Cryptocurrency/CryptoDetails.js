import React, { Component } from "react";
import { View } from "react-native";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";

class CryptoDetails extends Component {
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
    var coinName = navigation.getParam("name");
    var id = navigation.getParam("id");
    var changePercent = navigation.getParam("changePercent");
    var imageSource = navigation.getParam("imageSource");
    var marketCap = navigation.getParam("marketCap");
    var maxSupply = navigation.getParam("maxSupply");
    var price = navigation.getParam("price");
    var supply = navigation.getParam("supply");
    var symbol = navigation.getParam("symbol");
    var volumeUsed = navigation.getParam("volumeUsed");
    var vwap = navigation.getParam("vwap");

    return (
      <View>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: imageSource }} />
              <Body>
                <Text>{coinName}</Text>
                <Text note>{symbol}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text style={{ color: "green", textAlign: "center" }}>
                Price: ${price}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text style={{ color: "green", textAlign: "center" }}>
                Change(24h): {changePercent}%
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text>Market Cap: ${marketCap}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text style={{ color: "green", textAlign: "center" }}>
                Circulating Supply: {supply} {symbol}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text style={{ color: "green", textAlign: "center" }}>
                Max Supply: {maxSupply} {symbol}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default CryptoDetails;
