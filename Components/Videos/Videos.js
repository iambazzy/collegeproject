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

class Videos extends Component {
  state = {
    videos: [],
    refreshing: false,
    loading: true
  };
  componentDidMount() {
    this.fetchVideosFromBackend();
  }

  fetchVideosFromBackend = () => {
    axios
      .get("https://videowork.herokuapp.com/videos")
      .then(resp => {
        this.setState({
          videos: resp.data,
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
      this.fetchVideosFromBackend();
    });
  };

  render() {
    const videosToShow = this.state.loading ? (
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
          data={this.state.videos}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("VideoDetails", {
                  videoLink: item.videoLink,
                  content: item.content,
                  date: item.date,
                  story: item.story,
                  readmore: false
                })
              }
            >
              <Card>
                <CardImage
                  source={{
                    uri:
                      "http://gettravel.com/wp-content/uploads/2018/04/Video-Placeholder.jpg"
                  }}
                />
                <CardTitle title={item.content} />
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );
    return <View>{videosToShow}</View>;
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
export default Videos;
