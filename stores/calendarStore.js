import { makeAutoObservable } from "mobx";
// import Toast from "react-native-simple-toast";

class CalendarStore {
  dates = {};

  constructor() {
    makeAutoObservable(this);
  }

  assignCalendar = async (Start, End) => {
    this.dates = { start: Start, end: End };
    // console.log(Start, End);
  };
}

const calendarStore = new CalendarStore();

export default calendarStore;
