import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import authStore from "./authStore";

class TripStore {
  trips = [];

  constructor() {
    makeAutoObservable(this);
  }

  // taking the data but don't been pushed to the page???
  // addItemToTrip = async (newTrip) => {
  //   try {
  //     const foundTrip = this.trips.find((trip) => trip._id === newTrip._id);
  //     if (foundTrip) this.items.push(newTrip);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  createTrip = async (newTrip, userId) => {
    try {
      // const formData = new FormData();
      // for (const key in newTrip) {
      //   formData.append(key, newTrip[key]);
      // }
      ///:userId/trips
      const response = await instance.post(`/trips/${userId}/trips`, newTrip);
      this.trips.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: productStore.js ~ line 16 ~ ProductStore ~ createProduct= ~ error",
        error
      );
    }
  };

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
