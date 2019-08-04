import Movies from "./Components/Movies/Movies";
import News from "./Components/News/NewsNavigator/News";
import ContentContainer from "./Components/Homescreen/ContentContainer";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Crypto from "./Components/Cryptocurrency/Crypto";
import CryptoDetails from "./Components/Cryptocurrency/CryptoDetails";
import MovieDetails from "./Components/Movies/MovieDetails";
import Videos from "./Components/Videos/Videos";
import VideoDetails from "./Components/Videos/VideoDetails";
import CategoryDetails from "./Components/HorizontalNavigator/CategoryDetails";
import Auto from "./Components/Auto/Auto";
import AutoDetails from "./Components/Auto/AutoDetails";
import Podcast from "./Components/Podcast/Podcast";
import PodPlay from "./Components/Podcast/PodPlay";
const AppNavigator = createStackNavigator(
  {
    Home: ContentContainer,
    Movies: Movies,
    CategoryDetails: CategoryDetails,
    News: News,
    Cryptocurrency: Crypto,
    CryptoDetails: CryptoDetails,
    MovieDetails: MovieDetails,
    Videos: Videos,
    VideoDetails: VideoDetails,
    Podcast: Podcast,
    PodPlay: PodPlay,
    Auto: Auto,
    AutoDetails: AutoDetails
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
