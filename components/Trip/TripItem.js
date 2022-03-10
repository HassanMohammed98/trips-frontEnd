import { Center, Pressable, Stack, VStack } from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

//! pass to detail to show the detail
const TripItem = ({ trip }) => {
  const navigation = useNavigation();

  return (
    <Stack space={3} alignItems="center">
      <Pressable
        onPress={() => {
          //                                we send shop to shopDetail:
          navigation.navigate("TripDetail", { trip: trip });
        }}
      >
        <VStack space={3} alignItems="center">
          <Center
            size={16}
            bg="primary.400"
            rounded="md"
            _text={{
              color: "white",
            }}
            shadow={3}
          >
            {trip.name}
          </Center>
          <Center
            bg="secondary.400"
            size={20}
            rounded="md"
            _text={{
              color: "white",
            }}
            shadow={3}
          >
            {trip.description}
          </Center>
          {/* <Image style={styles.Image} source={{ uri: trip.image }} /> */}

          {/* <Button
        title="Delete"
        onPress={() => cartStore.removeItemFromCart(item.product._id)}
      /> */}
        </VStack>
      </Pressable>
    </Stack>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  Image: {
    width: 50,
    height: 50,
  },
});
