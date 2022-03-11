import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar, Button } from "native-base";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

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

      <View style={styles.inputView}>
        <Text style={styles.TextInput}>owner: {trip.user.username} </Text>
      </View>

      <View style={styles.inputView}>
        <Text style={styles.TextInput}>{trip.name} </Text>
      </View>

      <View style={styles.inputView}>
        <Text style={styles.TextInput}>{trip.description} </Text>
      </View>
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
        }}
        alt="Alternate Text"
        size="xl"
      />
      {/* // if the user = owner  he can delete */}
      {trip.user === authStore.user._id && (
        <Button title="Delete" onPress={() => tripStore.deleteTrip(trip._id)}>
          Delete trip
        </Button>
      )}
    </View>
  );
};

export default TripDetail;

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
