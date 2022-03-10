import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TripStore {
  trips = [];

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  addItemToTrip = async (newTrip) => {
    try {
      const foundTrip = this.items.find(
        (trip) => trip.product._id === newTrip.product._id
      );
      if (foundTrip) {
        foundTrip.quantity += newTrip.quantity;
      } else {
        this.items.push(newTrip);
      }
      // const jsonValue = JSON.stringify(this.items);
      // await AsyncStorage.setItem("cart", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };
  //   createProduct = async (newProduct) => {
  //     try {
  //       const formData = new FormData();
  //       for (const key in newProduct) {
  //         formData.append(key, newProduct[key]);
  //       }
  //       const response = await instance.post("/products", formData);
  //       this.products.push(response.data);
  //     } catch (error) {
  //       console.log(
  //         "🚀 ~ file: productStore.js ~ line 16 ~ ProductStore ~ createProduct= ~ error",
  //         error
  //       );
  //     }
  //   };

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      console.log("data res", response.data);
    } catch (error) {
      console.log("Trips -> fetchTrips -> error", error);
    }
  };

  //   updateProduct = async (updatedProduct, productId) => {
  //     try {
  //       const res = await instance.put(`/products/${productId}`, updatedProduct);
  //       this.products = this.products.map((product) =>
  //         product._id === productId ? res.data : product
  //       );
  //     } catch (error) {
  //       console.log("ProductStore -> updateProduct -> error", error);
  //     }
  //   };

  //   deleteProduct = async (productId) => {
  //     try {
  //       await instance.delete(`/products/${productId}`);
  //       this.products = this.products.filter(
  //         (product) => product._id !== productId
  //       );
  //     } catch (error) {
  //       console.log("ProductStore -> deleteProduct -> error", error);
  //     }
  //   };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
