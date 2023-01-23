import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import yelp from "./src/api/yelp";

const navigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        title: "Business Search",
      },
    },
    ResultsShow: {
      screen: ResultsShowScreen,
      navigationOptions: {
        title: "Details",
      },
    },
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      //title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
