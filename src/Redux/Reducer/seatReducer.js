/** @format */

import React from "react";
import { BOOKING, DELETE_SEAT, SEAT_SELECTED } from "../contact/seatContant";
import { seatList } from "../data/seatList";
import { toast } from "react-toastify";

let initialValue = {
  seatList,
  active: "active",
  seatSelected: [],
  seatReserved: [],
};

const bookingNotify = () => {
  toast("Đặt vé thành công!", {
    position: "top-center",
    type: "success",
    autoClose: 1000,
  });
};

export const seatReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SEAT_SELECTED: {
      let newSeatList = [...seatList];
      let newSeatSelected = [...state.seatSelected];
      let newActive = state.active;
      document
        .getElementById(`${action.payload.soGhe}`)
        .classList.toggle(newActive);
      let index = newSeatList.findIndex((seat) =>
        seat.danhSachGhe.some((item) => item.soGhe === action.payload.soGhe)
      );
      let newSeat = newSeatList[index].danhSachGhe;
      let indexSeat = newSeat.findIndex(
        (item) => item.soGhe === action.payload.soGhe
      );
      let indexSeatSelected = newSeatSelected.findIndex(
        (item) => item.soGhe === action.payload.soGhe
      );

      if (indexSeatSelected === -1) {
        newSeatSelected.push(newSeat[indexSeat]);
      } else {
        newSeatSelected.splice(indexSeatSelected, 1);
      }

      return { ...state, seatSelected: newSeatSelected, active: newActive };
    }
    case DELETE_SEAT: {
      let newSeatSelected = [...state.seatSelected];

      let seat = newSeatSelected.filter(
        (item) => item.soGhe !== action.payload
      );

      return { ...state, seatSelected: seat };
    }
    case BOOKING: {
      let currentSeatSelect = [...state.seatSelected];
      let newSeatList = [...state.seatList];

      newSeatList.forEach((seat) => {
        seat.danhSachGhe.forEach((item) => {
          currentSeatSelect.forEach((selected) => {
            if (selected.soGhe === item.soGhe) {
              item.daDat = true;
            }
          });
        });
      });

      currentSeatSelect = [];

      bookingNotify();
      return {
        ...state,
        seatSelected: currentSeatSelect,
        seatList: newSeatList,
      };
    }
    default:
      return state;
  }
};
