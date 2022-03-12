import { StyleSheet } from "react-native";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import authStore from "../../stores/authStore";

const SignOut = () => {
  const navigation = useNavigation();
  
  return (
      
    <Button onPress={() => authStore.signout()}>SignOut</Button>
    
  );
};

export default SignOut;

const styles = StyleSheet.create({});
