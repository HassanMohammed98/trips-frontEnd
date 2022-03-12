import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Avatar, Pressable } from "native-base";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const EditPage = ({ route, navigation }) => {
  const { trip } = route.params;
  console.log("this is for update *****", trip);
  const [update, setUpdate] = useState({
    name: "",
    description: "",
    image: "",
  });
  const handleSubmit = () => {
    tripStore.updateTrip(update, trip._id);
    console.log("in submit handke%%%%%%%%", update);
    navigation.navigate("TripDetail");
  };
  return (
    <View style={styles.container}>
      <Avatar
        style={styles.image}
        size="2xl"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        }}
      >
        AK
      </Avatar>
      {/* editable={true} */}
      {/* <View style={styles.inputView}>
        <Text style={styles.TextInput}>
          owner: this is edit page {trip.user.username}
        </Text>
      </View> */}
      <View style={styles.inputView}>
        <TextInput
          onChangeText={(name) => setUpdate({ ...update, name })}
          editable={true}
          style={styles.TextInput}
        >
          {trip.name}{" "}
        </TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          onChangeText={(description) => setUpdate({ ...update, description })}
          editable={true}
          style={styles.TextInput}
        >
          {trip.description}{" "}
        </TextInput>
      </View>
      {/* <Image
        onChangeText={(image) => setUpdate({ ...update, image })}
        source={{
          uri: "https://picsum.photos/200/300",
        }}
        alt="Alternate Text"
        size="xl"
      /> */}

      <Button title="update" onPress={handleSubmit}>
        update
      </Button>
    </View>
  );
};

export default observer(EditPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 10,
    width: 20,
  },

  inputView: {
    backgroundColor: "#5EE6EB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
