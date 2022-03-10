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
  //   obj = null;
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  // signup methods:
  signup = async (userData) => {
    try {
      const res = await instance.post("/users/signup", userData);
      this.setUser(res.data.token);
      console.log("AuthStore -> signup -> res.data.token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  // sign in method:
  //* bad request path thing error sign in 6 task?
  signin = async (userData) => {
    try {
      const res = await instance.post("/users/signin", userData);
      this.setUser(res.data.token);
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  // * signout method:
  // signout = async () => {
  //     this.setUser(null);
  //     await AsyncStorage.removeItem("myToken");
  // };

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
