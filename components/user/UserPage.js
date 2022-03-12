import React from "react";
import { Button } from "native-base";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import trips from "../Trip/TripItem";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

const UserPage = ({ navigation, trips }) => {
  const [status, setStatus] = React.useState(true);
  const edit = () => setStatus(status === true ? false : true);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          {/* <Text style={styles.name}>John Doe</Text>
          <Text style={styles.info}>UX Designer / Mobile developer</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text> */}

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              navigation.navigate("UserListTrip", { user: authStore.user._id })
            }
          >
            <Text>View trip List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>BIO:</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            {/* //? check the number: */}
            <Text>Total of trips: {authStore.user._id.length}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button onPress={() => navigation.navigate("UserListTrip")}>
        VIEW Trip
      </Button> */}
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  editButton: {
    width: 70,
    height: 30,
  },
});
