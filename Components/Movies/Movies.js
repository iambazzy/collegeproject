import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import axios from "axios";
import { Card, CardItem, Thumbnail, Left, Body } from "native-base";
class Movies extends Component {
  state = {
    movies: [],
    refreshing: false,
    loading: true
  };
  componentDidMount() {
    this.fetchMoviesFromBackEnd();
  }
  fetchMoviesFromBackEnd = () => {
    axios
      .get("https://imdbwork.herokuapp.com/movies")
      .then(res => {
        this.setState({
          movies: res.data,
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
      this.fetchMoviesFromBackEnd();
    });
  };

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
      <FlatList
        data={this.state.movies}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("MovieDetails", {
                movieName: item.movieName,
                content: item.content,
                year: item.year,
                rating: item.rating,
                trailerThumbnail: item.trailerThumbnail,
                budget: item.budget,
                trailer: item.trailer,
                poster: item.poster
              });
            }}
          >
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    square
                    style={{ width: 130, height: 180 }}
                    source={{ uri: item.poster }}
                  />
                  <Body>
                    <Text>{item.movieName}</Text>
                    <Text note>{item.year}</Text>
                  </Body>
                </Left>
              </CardItem>
              {/* <CardItem cardBody>
                <Image
                  source={{ uri: "Image URL" }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem> */}
            </Card>
          </TouchableOpacity>
        )}
      />
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
export default Movies;
