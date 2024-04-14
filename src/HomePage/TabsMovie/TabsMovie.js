/** @format */

import React, { useEffect, useState } from "react";
import { movieServ } from "../../../Service/movieService";
import { Tabs } from "antd";
import ItemTabMovie from "./ItemTabMovie";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
];

export default function TabsMovie() {
  const [heThongRap, setHeThongRap] = useState([]);

  useEffect(() => {
    movieServ
      .getMovieByTheater()
      .then((res) => {
        console.log("res the: ", res);
        setHeThongRap(res.data);
      })
      .catch((err) => {});
  }, []);

  let renderHeThongRap = () => {
    return heThongRap.map((rap, index) => {
      return {
        key: rap.maHeThongRap,
        label: <img className="h-16" src={rap.logo} alt="" />,
        children: (
          <Tabs
            style={{ height: 500 }}
            defaultActiveKey="1"
            tabPosition="left"
            items={rap.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: <div>{cumRap.tenCumRap}</div>,
                children: (
                  <div className=" overflow-y-scroll" style={{ height: 500 }}>
                    {cumRap.danhSachPhim.map((item) => {
                      return <ItemTabMovie phim={item} />;
                    })}
                  </div>
                ),
              };
            })}
            onChange={onChange}
          />
        ),
      };
    });
  };
  return (
    <div id="lichChieu" className="container ">
      {/* <h2 className="text-4xl uppercase font-bold text-center mb-4 mt-4">
        Lịch Chiếu
      </h2>
      <div className="bg-white p-1 sm:p-5 rounded-lg w-100">
        <Tabs>

        </Tabs>
      </div> */}
    </div>
  );
}
