import { StyleSheet, Text, View } from "react-native";
import Home from "../Home";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import TripCreate from "../Trip/TripCreate";
const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="SignIn"
        component={SignIn}
        // options={{ headerShown: false }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        // options={{ headerShown: false }}
      />
      <Screen
        name="TripCreate"
        component={TripCreate}
        // options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
