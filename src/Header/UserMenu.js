/** @format */

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserDropDown from "./UserDropDown";
import { localUserSrv } from "../Service/localService";

export default function UserMenu() {
  let userInfo = useSelector((state) => {
    return state.userReducer.userInfo;
  });
  let handleLogout = () => {
    localUserSrv.remove();
    window.location.reload();
    // window.location.href="/login";
  };

  let renderContent = () => {
    let buttonCss = "px-5 py-2 border-2 border-black rounded ";
    if (userInfo) {
      return (
        <>
          <UserDropDown
            user={userInfo}
            logoutBtn={<button onClick={handleLogout}>Đăng xuất</button>}
          />
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/login">
            <button className={buttonCss}>
              <div className="flex">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>
                <span>Đăng nhập</span>
              </div>
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className={buttonCss}>
              <div className="flex ">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>
                <span>Đăng Ký</span>
              </div>
            </button>
          </NavLink>
        </>
      );
    }
  };
  return <div className="space-x-5">{renderContent()}</div>;
}
