/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSeatSelectedAction } from "../../Redux/action/movieAction";
import "../BookingPage/Seats.css";

class Seats extends Component {
  renderList = () => {
    return this.props.seatList.map((item) => {
      return (
        <tr key={item.id}>
          {item.danhSachGhe.map((seat) => {
            return (
              <td key={seat.soGhe}>
                <button
                  id={seat.soGhe}
                  className={seat.daDat === true ? "selected" : ""}
                  onClick={() => {
                    this.props.handleSeatSelected(seat);
                  }}
                  disabled={seat.daDat === true ? true : false}
                >
                  {seat.soGhe}
                </button>
              </td>
            );
          })}
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="col-span-7">
        <div className="bookingSeat">
          <div className="screen"> Màn Hình</div>
          <div className="typeSeat mt-6 space-x-16">
            <span className="greenBox">Đã bán</span>
            <span className="orangeBox mx-3">Ghế bạn chọn</span>
            <span className="whiteBox">Ghế trống</span>
          </div>
          <div className="seatBlock">
            <table className="seatContainer w-100 h-96">
              <tbody>{this.renderList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.seatReducer.seatList,
    active: state.seatReducer.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSeatSelected: (seat) => {
      dispatch(handleSeatSelectedAction(seat));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seats);
