import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { Card, CardTitle, CardImage } from "react-native-material-cards";
class Sports extends Component {
  state = {
    news: [],
    refreshing: false,
    loading: true
  };

  componentDidMount() {
    this.fetchSportsFromBackend();
  }

  fetchSportsFromBackend() {
    axios
      .get("http://projectbackendheroku.herokuapp.com/sports")
      .then(res => {
        const data = res.data;
        this.setState({ news: data, refreshing: false, loading: false });

        console.log(this.state.news);
      })
      .catch(err => {
        console.log("[Sports.js]" + err);
      });
  }
  handleRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.fetchSportsFromBackend();
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
                  image: item.news_obj.image_url,
                  title: item.news_obj.title,
                  content: item.news_obj.content,
                  link: item.news_obj.bottom_panel_link,
                  author: item.news_obj.author_name,
                  readmore: true
                })
              }
            >
              <Card>
                <CardImage source={{ uri: item.news_obj.image_url }} />
                <CardTitle title={item.news_obj.title} />
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
export default Sports;
