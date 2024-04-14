/** @format */

import React, { useEffect, useMemo, useState } from "react";
import Seats from "./Seats";
import Information from "./Information";
import { movieServ } from "../../Service/movieService";
import { Link, NavLink, Navigate, useParams } from "react-router-dom";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  handleBookingAction,
  handleDeleteSeatAction,
} from "../../Redux/action/movieAction";

export default function BookingPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    let fetchDetail = async () => {
      try {
        let result = await movieServ.getDetailMovie(id);
        setMovie(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetail();
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-2 container">
        <div>
          <Seats />
        </div>
        <div>
          <Information data={movie} />
          <div className="text-center">
            <NavLink to={`/detail/${movie.ma_phim}/booking/pay`}>
              <Button className="bg-slate-400 w-28 pt-2 pb-2">Tiếp tục</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
