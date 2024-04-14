/** @format */
import { DELETE_SEAT, BOOKING, SEAT_SELECTED } from "../contact/seatContant";

export const handleDeleteSeatAction = (id) => {
  return {
    type: DELETE_SEAT,
    payload: id,
  };
};

export const handleBookingAction = () => {
  return {
    type: BOOKING,
  };
};

export const handleSeatSelectedAction = (seat) => {
  return {
    type: SEAT_SELECTED,
    payload: seat,
  };
};
