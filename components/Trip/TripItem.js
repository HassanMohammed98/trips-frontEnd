import { Center, HStack, Stack, VStack } from "native-base";
import { Button, StyleSheet, Text, View } from "react-native";
import tripStore from "../../stores/tripStore";

const TripItem = ({ trip }) => {
  return (
    <Stack space={3} alignItems="center">
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
