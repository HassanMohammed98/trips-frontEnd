import axios from "axios";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
// import jwt-decode to check the token:
import decode from "jwt-decode";
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
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      console.log("AuthStore -> signup -> res.data.token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  // * sign in method:
  signin = async (userData) => {
    try {
      const res = await instance.post("/users/signin", userData);
      this.setUser(res.data.token);
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  setUser = async (token) => {
    try {
      const decodedToken = decode(token);
      this.user = decodedToken;
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      await AsyncStorage.setItem("myToken", token);
    } catch (e) {
      console.log(e);
    }
  };
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < decodedToken.exp) {
        this.setUser(token);
      } else {
        // this.signout();
        console.log("you signout");
      }
    }
  };
}

const authStore = new AuthStore();

export default authStore;
