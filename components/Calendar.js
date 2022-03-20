import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
// import { makeAutoObservable } from "mobx";
import { HStack, VStack } from "native-base";
// import calendarStore from "../stores/calendarStore";

const Calendar = ({ setCalendar, calendar }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedStartDate: null,
  //     selectedEndDate: null,
  //   };
  //   // super(props);
  //   // makeAutoObservable(this);
  //   this.onDateChange = this.onDateChange.bind(this);
  // }

  const onDateChange = (date, type) => {
    if (type === "END_DATE") {
      setCalendar({ ...calendar, selectedEndDate: date });
    } else {
      setCalendar({
        selectedStartDate: date,
        selectedEndDate: "",
      });
    }
    console.log(calendar);
  };

  // const { selectedStartDate, selectedEndDate } = calendar;
  const minDate = new Date(); // Today
  const maxDate = new Date(2032, 3, 13);
  // const startDate = selectedStartDate ? selectedStartDate.toString() : "";
  // const endDate = selectedEndDate ? selectedEndDate.toString() : "";
  // calendarStore.assignCalendar(startDate, endDate);

  return (
    <HStack>
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={onDateChange}
          width={320}
        />
      </View>
    </HStack>
  );
};

export default Calendar;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#FFFFFF",
    // marginTop: 100,
    padding: 5,
    marginBottom: -15,
    borderRadius: 20,
  },
});
