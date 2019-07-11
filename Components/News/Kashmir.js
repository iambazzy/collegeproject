import React, { Component } from "react";
import axios from "axios";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { Card, CardTitle, CardImage } from "react-native-material-cards";
class Kashmir extends Component {
  state = {
    news: [],
    refreshing: false,
    loading: true
  };

  componentDidMount() {
    this.fetchKashmirFromBackend();
  }

  fetchKashmirFromBackend = () => {
    axios
      .get("https://scrapework.herokuapp.com/kashmir")
      .then(res => {
        const data = res.data;
        this.setState({ news: data, refreshing: false, loading: false });
        console.log(data);
      })
      .catch(err => {
        console.log("[Kashmir.js]" + err);
      });
  };

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.fetchKashmirFromBackend();
    });
  };

  render() {
    const newsToShow = this.state.loading ? (
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
          data={this.state.news}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("FullPage", {
                  image: item.imgSrc,
                  title: item.headLine,
                  content: item.content,
                  author: item.time,
                  readmore: false
                })
              }
            >
              <Card>
                <CardImage source={{ uri: item.imgSrc }} />
                <CardTitle title={item.headLine} />
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );
    return <View>{newsToShow}</View>;
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
export default Kashmir;
