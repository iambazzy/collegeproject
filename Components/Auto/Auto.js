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

export default class Auto extends Component {
  state = {
    auto: [],
    refreshing: true,
    loading: true
  };

  componentDidMount() {
    this.fetchAutoFromBackend();
  }

  fetchAutoFromBackend() {
    axios
      .get("http://autoscrape.herokuapp.com/auto")
      .then(res => {
        const data = res.data;
        this.setState({ auto: data, refreshing: false, loading: false });

        console.log(this.state.auto);
      })
      .catch(err => {
        console.log("Some error occured" + err);
      });
  }
  handleRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.fetchAutoFromBackend();
    });
  };
  render() {
    const autoToShow = this.state.loading ? (
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
          data={this.state.auto}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("AutoDetails", {
                  image: item.firstImage,
                  title: item.headline,
                  content: item.content
                })
              }
            >
              <Card>
                <CardImage source={{ uri: item.firstImage }} />
                <CardTitle title={item.headline} />
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );
    return <View>{autoToShow}</View>;
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
