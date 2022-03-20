import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Button, VStack, HStack } from "native-base";
import { observer } from "mobx-react";
import { useToast } from "native-base";
import authStore from "../../stores/authStore";
import { baseURL } from "../../stores/instance";

const TripDetail = ({ route, navigation }) => {
  const toast = useToast();
  const { trip } = route.params;
  // console.log(navigation);
  return (
    //   <View style={styles.inputView}>
    //     <TextInput style={styles.TextInput}>
    //       owner: this trip detail{trip.user.username}
    //     </TextInput>
    //   </View>
    //   <View style={styles.inputView}>
    //     <Text style={styles.TextInput}>{trip.name} </Text>
    //   </View>
    //   <View style={styles.inputView}>
    //     <Text style={styles.TextInput}>{trip.description} </Text>
    //   </View>
    //   <Image
    //     source={{
    //       uri: "https://picsum.photos/200/300",
    //     }}
    //     alt="Alternate Text"
    //     size="xl"
    //   />

    //   {/* // first check if uesr is signed in, then, if the user = owner he can delete */}
    //   {trip.user._id === authStore.user._id && (
    //     <Button
    //       style={{ marginBottom: 5 }}
    //       onPress={() => {
    //         tripStore.deleteTrip(trip._id, navigation, trip.name, toast);
    //       }}
    //     >
    //       Delete trip
    //     </Button>
    //   )}

    //   {trip.user._id === authStore.user._id && (
    //     <Button
    //       title="update"
    //       onPress={() => navigation.navigate("EditPage", { trip: trip })}
    //     >
    //       update
    //     </Button>
    //   )}
    // </View>

    <View style={styles.container}>
      <VStack style={styles.topContainer}>
        <View
          style={{
            flex: 2.25,
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Pressable>
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
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>{trip.user.username}</Text>
        </View>
      </VStack>
      <View style={styles.bottomContainer}>
        <VStack style={{ width: "90%" }}>
          <VStack space={"3"} style={{ marginBottom: 15 }}>
            {trip.image === "" ? (
              <Image
                style={styles.tripImage}
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
                }}
              />
            ) : (
              <Image
                style={styles.tripImage}
                source={{ uri: baseURL + trip.image }}
              />
            )}
            <Text style={styles.textInput}>{trip.name}</Text>
            <Text style={styles.textInput}>{trip.description}</Text>
          </VStack>
          <VStack
            space="1"
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <HStack
              style={{
                paddingTop: 6,
                margin: 6,
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "70%",
                top: 20,
              }}
            >
              {/* {trip.user._id === authStore.user._id && (
                <Button
                  variant="outline"
                  style={styles.button}
                  _text={{ color: "rgb(245, 245, 245)", fontWeight: "bold" }}
                  onPress={() => {
                    tripStore.deleteTrip(
                      trip._id,
                      navigation,
                      trip.name,
                      toast
                    );
                  }}
                >
                  Delete trip
                </Button>
              )}
              {trip.user._id === authStore.user._id && (
                <Button
                  style={{ borderRadius: 40 }}
                  onPress={() =>
                    navigation.navigate("EditPage", { trip: trip })
                  }
                >
                  update
                </Button>
              )} */}
            </HStack>
          </VStack>
        </VStack>
      </View>
    </View>
  );
};

export default observer(TripDetail);

const styles = StyleSheet.create({
  tripImage: {
    width: 150,
    height: 150,
    zIndex: 50,
    resizeMode: "contain",
    borderRadius: 50,
    alignSelf: "center",
  },
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
    flex: 1.75,
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
    fontSize: 14,
    fontWeight: "bold",
    color: "grey",
  },

  button: {
    margin: 6,
    width: "50%",
    borderRadius: 40,
    borderColor: "#be123c",
    backgroundColor: "#be123c",
    borderWidth: 1,
    fontWeight: "bold",
    textDecorationColor: "white",
  },
  title: {
    fontSize: 35,
    color: "rgb(48, 71, 94)",
    paddingTop: 5,
  },

  text: {
    padding: 7,
    color: "rgb(225, 225, 225)",
    fontSize: 14,
  },
});
