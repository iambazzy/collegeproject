import Movies from "./Components/Movies/Movies";
import News from "./Components/News/NewsNavigator/News";
import ContentContainer from "./Components/Homescreen/ContentContainer";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Crypto from "./Components/Cryptocurrency/Crypto";
import CryptoDetails from "./Components/Cryptocurrency/CryptoDetails";
import MovieDetails from "./Components/Movies/MovieDetails";
import Videos from "./Components/Videos/Videos";
import VideoDetails from "./Components/Videos/VideoDetails";
import Music from "./Components/Music/Music";
const AppNavigator = createStackNavigator(
  {
    Home: ContentContainer,
    Movies: Movies,
    News: News,
    Cryptocurrency: Crypto,
    CryptoDetails: CryptoDetails,
    MovieDetails: MovieDetails,
    Videos: Videos,
    VideoDetails: VideoDetails,
    Music: Music
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
