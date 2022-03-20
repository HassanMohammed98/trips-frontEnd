import { Button, VStack, HStack } from "native-base";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import Calendar from "../Calendar";
import AddImage from "../buttons/AddImage";

const TripCreate = ({ navigation }) => {
  const [trip, setTrip] = useState({
    name: "",
    location: "",
    description: "",
    image: "",
    // user: authStore.user._id,
  });
  const [calendar, setCalendar] = useState({
    selectedStartDate: "",
    selectedEndDate: "",
  });
  const AddImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);
    let uriParts = result.uri.split(".");
    let fileType = uriParts[uriParts.length - 1];
    let uri = result.uri;
    console.log(uri);
    if (!result.cancelled) {
      setTrip({
        ...trip,
        image: { uri, name: `photo.${fileType}`, type: `image/${fileType}` },
      });
    }
  };

  // console.log(calendar);
  const handleSubmit = () => {
    // ! if the error get you here >> you are not sign in::
    // console.log(authStore.user._id);
    // console.log(trip);
    tripStore.createTrip(trip, calendar);
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <VStack style={styles.topContainer}>
        <View
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>TRVLR</Text>
        </View>
      </VStack>
      <View style={styles.bottomContainer}>
        <VStack style={{ width: "90%" }}>
          {/* <Text style={styles.header}> Signin</Text> */}
          <VStack space={"3"} style={{ marginBottom: 15 }}>
            <HStack w={"100%"} style={{ marginBottom: -2 }}>
              <TextInput
                style={styles.textInputName}
                onChangeText={(name) => setTrip({ ...trip, name })}
                placeholder="Enter Trip Name"
              />
              <Button
                variant="outline"
                style={styles.buttonImage}
                onPress={() => AddImage()}
                _text={{ color: "rgb(245, 245, 245)", fontWeight: "bold" }}
              >
                + Trip Image
              </Button>
            </HStack>
            <TextInput
              style={styles.textInput}
              onChangeText={(location) => setTrip({ ...trip, location })}
              placeholder="Enter Trip Location(s), kindly seperate with dash (-)"
            />
            <TextInput
              style={styles.textInputDescription}
              onChangeText={(description) => setTrip({ ...trip, description })}
              placeholder="Enter Trip Description"
            />
            <HStack
              w={"80%"}
              style={{
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Calendar setCalendar={setCalendar} calendar={calendar} />
            </HStack>
          </VStack>
          <VStack
            space="1"
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Button
              variant="outline"
              style={styles.button}
              onPress={handleSubmit}
              _text={{ color: "rgb(245, 245, 245)", fontWeight: "bold" }}
            >
              create
            </Button>
          </VStack>
        </VStack>
      </View>
    </View>
  );
};

export default observer(TripCreate);

const styles = StyleSheet.create({
  Button: {
    width: 150,
    height: 80,
    color: "red",
  },
  //  we need to center it for design only pleases:
  Text: {
    justifyContent: "center",
  },
  container: {
    flex: 1,
    // alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(245, 245, 245)",
  },
  topContainer: {
    // backgroundColor: "white",
    flex: 1,
    width: "100%",
    position: "relative",
    // justifyContent: "center",
    // alignItems: "center",
  },

  bottomContainer: {
    backgroundColor: "rgb(48, 71, 94)",
    flex: 3,
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
    padding: 4,
    height: 44,
    paddingLeft: 15,
    borderColor: "rgb(200, 200, 200)",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "rgb(225, 225, 225)",
  },
  textInputName: {
    width: "63%",
    margin: 4,
    padding: 4,
    paddingLeft: 15,
    borderColor: "rgb(200, 200, 200)",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "rgb(225, 225, 225)",
  },

  textInputDescription: {
    paddingLeft: 15,
    padding: 8,
    margin: 4,
    height: 55,
    textAlign: "auto",
    textAlignVertical: "top",
    borderColor: "rgb(200, 200, 200)",
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
    // bg: "amber.400:alpha.70",
  },
  buttonImage: {
    margin: 6,
    width: "31%",
    borderRadius: 40,
    borderColor: "rgb(229, 144, 3)",
    backgroundColor: "rgb(229, 144, 3)",
    borderWidth: 1,
    fontWeight: "bold",
    textDecorationColor: "white",
    // bg: "amber.400:alpha.70",
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
