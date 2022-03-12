import axios from "axios";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
// import jwt-decode to check the token:
import decode from "jwt-decode";
import Toast from "react-native-simple-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

//! make sure of the code ::
// make auth store - sign up - sign in:
class AuthStore {
  // make empty obj :
  user = null;
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  // signup methods:
  signup = async (userData) => {
    try {
      const res = await instance.post("/users/signup", userData);
      Toast.show(`User Registered`);
      this.setUser(res.data.token);
      console.log("AuthStore -> signup -> res.data.token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  // * sign in method:
  signin = async (userData, navigation) => {
    try {
      const res = await instance.post("/users/signin", userData);
      this.setUser(res.data.token, navigation);
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  // * signout method:
  signout = async () => {
    if (this.user === null) console.log("user is not signed in");
    else {
      this.user = null;
      await AsyncStorage.removeItem("token");
      // console.log("user is signed out");
      Toast.show(`Signed Out`);
    }
  };

  setUser = async (token, navigation) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    navigation.navigate("Home");
    Toast.show(`Signed In`);
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < +decodedToken.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();

export default authStore;
