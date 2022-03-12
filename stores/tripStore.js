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

  updateTrip = async (updatedTrip, tripId) => {
    console.log(tripId);
    console.log(updatedTrip);
    try {
      const res = await instance.put(`/trips/${tripId}`, updatedTrip);
      this.trips = this.trips.map((trip) =>
        trip._id === tripId ? res.data : trip
      );
      l;
    } catch (error) {
      console.log("tripStore -> updateTrip -> error", error);
    }
  };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip._id !== tripId);
    } catch (error) {
      console.log("tripStore -> deleteTrip -> error", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
