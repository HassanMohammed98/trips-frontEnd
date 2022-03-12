import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import TripCreate from "../Trip/TripCreate";
import HomeNotRegister from "../HomeNotRegister";
import UserPage from "../user/UserPage";
import UserListTrip from "../user/UserListTrip";
import TripDetail from "../Trip/TripDetail";
import EditPage from "../user/EditPage";
import BackButton from "../buttons/BackButton";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      {/* <Screen
        name="HomeNotRegister"
        component={HomeNotRegister}
        // options={{ headerShown: false }}
      /> */}
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerStyle: {
            backgroundColor: "rgb(48, 71, 94)",
            borderBottomEndRadius: 24,
            borderBottomLeftRadius: 24,
            height: 80,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "rgb(225, 225, 225)",
            fontSize: 24,
            marginTop: -40,
          },
          headerLeft: () => <BackButton />,
        }}
        // options={{ headerShown: false }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: "rgb(48, 71, 94)",
            borderBottomEndRadius: 24,
            borderBottomLeftRadius: 24,
            height: 80,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "rgb(225, 225, 225)",
            fontSize: 24,
            marginTop: -40,
          },
          headerLeft: () => <BackButton />,
        }}
        // options={{ headerShown: false }}
      />
      <Screen
        name="TripCreate"
        component={TripCreate}
        // options={{ headerShown: false }}
      />
      <Screen
        name="UserListTrip"
        component={UserListTrip}
        // options={{ headerShown: false }}
      />
      <Screen
        name="UserPage"
        component={UserPage}
        // options={{ headerShown: false }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        // options={{ headerShown: false }}
      />
      <Screen
        name="EditPage"
        component={EditPage}
        // options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
