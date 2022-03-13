import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { VStack } from "native-base";
import authStore from "../../stores/authStore";
import UserListView from "./UserListView";

const UserListTrip = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <VStack style={styles.topContainer}>
        <View
          style={{
            flex: 0.15,
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        ></View>
        <View
          style={{
            flex: 1.5,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 150,
              height: 150,
              zIndex: 50,
              resizeMode: "contain",
              borderRadius: 100,
            }}
            source={{
              uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
            }}
          />
          <Text style={styles.title}>TRVLR</Text>
        </View>
      </VStack>
      <View style={styles.bottomContainer}>
        <VStack style={{ width: "90%" }}>
          <VStack space={"3"} style={{ marginBottom: 15 }}></VStack>
          <VStack>
            <UserListView />
          </VStack>
        </VStack>
      </View>
    </View>
  );
};

export default UserListTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(245, 245, 245)",
  },
  topContainer: {
    flex: 1,
    width: "100%",
    position: "relative",
  },

  bottomContainer: {
    backgroundColor: "rgb(48, 71, 94)",
    flex: 1.5,
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    height: 30,
    width: 30,
    zIndex: 5,
  },

  textInput: {
    margin: 4,
    padding: 6,
    borderColor: "pink",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "rgb(225, 225, 225)",
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },

  button: {
    margin: 6,
    width: "50%",
    borderRadius: 40,
    borderColor: "rgb(229, 144, 3)",
    backgroundColor: "rgb(229, 144, 3)",
    borderWidth: 1,
    fontWeight: "bold",
    textDecorationColor: "white",
  },
  title: {
    fontSize: 60,
    color: "rgb(48, 71, 94)",
  },

  text: {
    padding: 7,
    color: "rgb(225, 225, 225)",
    fontSize: 14,
  },
});
