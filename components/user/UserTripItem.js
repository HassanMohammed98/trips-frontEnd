import { Pressable, VStack, Button, HStack } from "native-base";
import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tripStore from "../../stores/tripStore";
import { useToast, AlertDialog } from "native-base";

//! pass to detail to show the detail
const UserTripItem = ({ trip }) => {
  const navigation = useNavigation();
  const toast = useToast();
  //   const handlePress = () => {tripStore.deleteTrip(trip._id, navigation, trip.name, toast);}

  return (
    <View style={styles.trip}>
      <Pressable
        onPress={() => {
          //we send trip to tripDetail:
          navigation.navigate("TripDetail", { trip: trip });
        }}
        w={"95%"}
        backgroundColor={"rgb(245, 245, 245)"}
        borderRadius={10}
        style={styles.shadow}
      >
        <VStack>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            alt="Trip image"
            style={styles.image}
          />
          <View style={styles.info}>
            <HStack>
              <Text style={styles.heading}>Trip: {trip.name}</Text>
              <Button
                variant="outline"
                style={styles.button}
                _text={{ color: "rgb(245, 245, 245)", fontWeight: "bold" }}
                onPress={() => {
                  tripStore.deleteTrip(trip._id, navigation, trip.name, toast);
                }}
              >
                Delete trip
              </Button>
            </HStack>
          </View>
        </VStack>
      </Pressable>
    </View>
  );
};

export default UserTripItem;

const styles = StyleSheet.create({
  trip: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
    marginBottom: 7,
  },
  image: {
    width: "100%",
    aspectRatio: 2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  info: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 25,
  },
  heading: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "navy",
  },
  destination: {
    marginHorizontal: 36,
    borderRadius: 12,
    overflow: "visible",
    width: "100%",
    height: 160,
  },
  destinationInfo: {
    position: "absolute",
    borderRadius: 12,
    paddingHorizontal: 36,
    paddingVertical: 16,
    bottom: 5, //In iOS platform, bottom : -36
    right: 36,
    left: 36,
    backgroundColor: "white",
    opacity: 0.7,
    fontWeight: "500",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 7,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 10,
  },
  button: {
    margin: 6,
    width: "50%",
    borderRadius: 40,
    borderColor: "rgb(255, 87, 51)",
    backgroundColor: "rgb(255, 87, 51)",
    borderWidth: 1,
    fontWeight: "bold",
    textDecorationColor: "white",
    left: 67,
  },
});
