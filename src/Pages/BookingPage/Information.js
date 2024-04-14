/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleBookingAction,
  handleDeleteSeatAction,
} from "../../Redux/action/movieAction";
import "../BookingPage/Information.css";

class Information extends Component {
  renderInfo = () => {
    return this.props.seatSelected.map((item) => {
      return (
        <tr key={item.soGhe}>
          <td>{item.soGhe}</td>
          <td>
            {item.gia.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </td>
        </tr>
      );
    });
  };

  handleTotal = () => {
    let total = 0;

    for (let i = 0; i < this.props.seatSelected.length; i++) {
      total += this.props.seatSelected[i].gia;
    }
    return total;
  };

  render() {
    return (
      <div className="grid grid-rows-2 space-y-2 justify-center">
        <div className="inforMovie w-96 h-full">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
              {this.props.data.ten_phim}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {this.props.data.mo_ta}
            </p>
          </a>
        </div>

        <div className="detailMovie">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tổng đơn hàng:
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {this.handleTotal().toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}{" "}
            </p>
          </a>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    seatSelected: state.seatReducer.seatSelected,
  };
};

export default connect(mapStateToProps)(Information);
