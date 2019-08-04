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

export default class Podcast extends Component {
  state = {
    pods: [],
    refreshing: false,
    loading: true
  };
  componentDidMount() {
    this.fetchPodcastFromBackend();
  }

  fetchPodcastFromBackend = () => {
    axios
      .get("http://podscrape.herokuapp.com/podcasts")
      .then(resp => {
        this.setState({
          pods: resp.data,
          refreshing: false,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.fetchPodcastFromBackend();
    });
  };

  render() {
    const PodcastToShow = this.state.loading ? (
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
          data={this.state.pods}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("PodPlay", {
                  podLink: item.audioLink,
                  title: item.title,
                  story: item.story
                })
              }
            >
              <Card>
                <CardImage source={{ uri: item.poster }} />
                <CardTitle title={item.title} />
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );
    return <View>{PodcastToShow}</View>;
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
