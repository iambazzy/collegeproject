import Sports from "../Sports";
import Business from "../Business";
import News from "../GeneralNews";
import International from "../International";
import Technology from "../Technology";
import Politics from "../Politics";
import Detail from "../DetailPage";
import Kashmir from "../Kashmir";
import {
  createMaterialTopTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

const TabNavigator = createMaterialTopTabNavigator(
  {
    Headlines: News,
    Kashmir: Kashmir,
    Business: Business,
    Sports: Sports,
    Politics: Politics,
    Technology: Technology,
    International: International
  },
  {
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true,
      pressColor: "darkgray",
      activeTintColor: "black",
      style: {
        backgroundColor: "gray"
      },
      indicatorStyle: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const StackNavigator = createStackNavigator(
  {
    Home: TabNavigator,
    FullPage: Detail
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(StackNavigator);
