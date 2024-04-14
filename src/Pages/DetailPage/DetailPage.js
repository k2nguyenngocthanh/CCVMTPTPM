/** @format */

import React, { useEffect, useState } from "react";
import { NavLink, Route, useParams } from "react-router-dom";
import { movieServ } from "../../Service/movieService";
import moment from "moment/moment";
import { Progress, Rate } from "antd";
import ShowTime from "./ShowTime";
import ModalTrailer from "./ModalTrailer";
import BookingPage from "../BookingPage/BookingPage";

export default function DetailPage() {
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
    <div
      style={{
        backgroundImage: `url(${movie.hinh_anh})`,
        backgroundSize: "100%",
        minHeight: "100vh",
        backgroundPosition: "center",
      }}
    >
      <div className="custom">
        <div className="grid grid-cols-12 ">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1 "
                src={`http://localhost:8080/public/movie_img/${movie.hinh_anh}`}
                style={{ width: "100%", height: 300 }}
              />
              <div className="col-span-2 ml-5 " style={{ marginTop: "25%" }}>
                <p className="text-2xl">
                  Ngày chiếu:{" "}
                  {moment(movie.ngay_khoi_chieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-4xl text uppercase mt-4 mb-4 text-white">{movie.ten_phim}</p>
                <p>{movie.mo_ta?.substring(0, 150)} ...</p>
              </div>
            </div>
          </div>

          <div className="col-span-4 ml-5">
            <p className="text-4xl ">Đánh giá phim</p>
            <Progress percent={movie.danh_gia * 10} />
            <h1
              style={{ marginLeft: "5%" }}
              className="text-yellow-500 text-2xl"
            >
              <Rate
                allowHalf
                value={movie.danh_gia / 2}
                style={{ color: "yellow", fontSize: 30 }}
              />
            </h1>
            <br />
            <br />
            <NavLink to={`/detail/${movie.ma_phim}/booking`}>
              <a className="px-5 py-2 bg-red-600 text-white font-medium rounded-lg">
                Mua vé
              </a>
            </NavLink>
          </div>
        </div>
        {/* <div className="mt-20 ml-72 w-2/3 container bg-white px-5 py-5">
          <ShowTime />
        </div> */}
        <div className="mt-20 ml-72 x-2/4 container px-5 py-5">
          <ModalTrailer src={movie.trailer} />
        </div>
      </div>
    </div>
  );
}
