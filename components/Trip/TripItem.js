import { Center, Pressable, Stack, VStack, Button } from "native-base";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

//! pass to detail to show the detail
const TripItem = ({ trip }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.trip}>
      <Pressable
        onPress={() => {
          //                                we send trip to tripDetail:
          navigation.navigate("TripDetail", { trip: trip });
        }}
        w={"95%"}
        backgroundColor={"rgb(245, 245, 245)"}
        //warmGray.200
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
            <Text style={styles.heading}>Trip: {trip.name}</Text>
          </View>
        </VStack>
      </Pressable>
    </View>
  );
};

export default TripItem;

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
    // width : width - (36 * 2),
    marginHorizontal: 36,
    // paddingHorizontal: 36,
    // paddingVertical: 24,
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
});
// <Stack space={3} alignItems="center">
//   <Pressable
//     onPress={() => {
//       //                                we send shop to shopDetail:
//       navigation.navigate("TripDetail", { trip: trip });
//     }}
//   >
//     <VStack space={3} alignItems="center">
//       <Center
//         size={16}
//         bg="primary.400"
//         rounded="md"
//         _text={{
//           color: "white",
//         }}
//         shadow={3}
//       >
//         {trip.name}
//       </Center>
//       <Center
//         bg="secondary.400"
//         size={20}
//         rounded="md"
//         _text={{
//           color: "white",
//         }}
//         shadow={3}
//       >
//         {trip.description}
//       </Center>
//       {/* <Image style={styles.Image} source={{ uri: trip.image }} /> */}
//     </VStack>
//   </Pressable>
// </Stack>
