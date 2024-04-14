/** @format */

import axios from "axios";
import { BASE_URL } from "./config";

export const userServ = {
  postLogin: (loginForm) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: loginForm,
    });
  },
  postRegister: (registerForm) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: registerForm,
    });
  },
};
