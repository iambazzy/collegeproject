import React, { Component } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import axios from "axios";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";
class Crypto extends Component {
  state = {
    coins: [],
    loading: true
  };

  componentDidMount() {
    this.fetchInformationFromBackend();
  }

  fetchInformationFromBackend() {
    axios
      .get("https://projectbackendheroku.herokuapp.com/coins")
      .then(resp => {
        const fetchedData = resp.data;
        this.setState({ coins: fetchedData, loading: false });
        console.log(this.state.coins);
      })
      .catch(err => {
        console.log("[Crypto.js]" + err);
      });
  }
  render() {
    const dataToShow = this.state.loading ? (
      <View style={styles.container}>
        <ActivityIndicator
          color="black"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    ) : (
      <View>
        <FlatList
          data={this.state.coins}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("CryptoDetails", {
                  id: item.id,
                  name: item.name,
                  changePercent: item.changePercent24Hr,
                  imageSource: item.imgSrc,
                  marketCap: item.marketCapUsd,
                  maxSupply: item.maxSupply,
                  price: item.priceUsd,
                  supply: item.supply,
                  symbol: item.symbol,
                  volumeUsd: item.volumeUsd24Hr,
                  vwap: item.vwap24Hr
                });
              }}
            >
              <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: item.imgSrc }} />
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.symbol}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );

    return <View>{dataToShow}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 180
  }
});
export default Crypto;
