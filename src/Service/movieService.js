/** @format */

import { https } from "./config";

export const movieServ = {
  getMovieList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim");
  },
  getMovieByTheater: () => {
    return https.get(`api/QuanLyRap/LayThongTinHeThongRap`);
  },
  getBannerMovie: () => {
    return https.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  },
  getDetailMovie: (ma_phim) => {
    return https.get(`/api/QuanLyPhim/LayDanhSachPhimTheo?id=${ma_phim}`);
  },
};
