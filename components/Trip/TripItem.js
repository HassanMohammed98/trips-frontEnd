import { Center, Pressable, Stack, VStack, Button } from "native-base";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tripStore from "../../stores/tripStore";

//! pass to detail to show the detail
const TripItem = ({ trip }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => {
          //                                we send trip to tripDetail:
          navigation.navigate("TripDetail", { trip: trip });
        }}
      >
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: 12 }}
          source={{ uri: "https://picsum.photos/200/300" }}
        >
          <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
            {/* main name */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                paddingBottom: 8,
                textAlign: "center",
              }}
            >
              {trip.name}
            </Text>

            <View
            // style={[
            //   styles.row,
            //   { justifyContent: "space-between", alignItems: "center" },
            // ]}
            >
              {/* descretion */}
              <Text>{trip.description.split("").slice(0, 50)}...</Text>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  Image: {
    width: 50,
    height: 50,
  },
  destination: {
    // width : width - (36 * 2),
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 24,
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
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
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
