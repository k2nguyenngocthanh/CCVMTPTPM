import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { movieServ } from '../../Service/movieService';
import { Card, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import moment from 'moment';

export default function ShowTime() {
    let { id } = useParams();
    const [rap, setRap] = useState({});
    useEffect(() => {
      let fetchDetail = async () => {
        try {
          let result = await movieServ.getHeThongRapChieu(id);
          setRap(result.data.content);
  
          
        } catch (error) {}
      };
      fetchDetail();
    }, []);
    return (
      <div id="DatVe">
        <Tabs tabPosition={"left"}>
          {rap.heThongRapChieu?.map((htr, index) => {
            return (
              <TabPane
                tab={
                  <div>
                    <img
                      src={htr.logo}
                      width={50}
                      className="rounded-full"
                      alt=""
                    />{" "}
                    {htr.tenHeThongRap}
                  </div>
                }
                key={index}
              >
                {htr.cumRapChieu?.map((cumRap, index) => {
                  
                  return (
                    <div className="mt-5" key={index}>
                      <div className="flex flex-row">
                        <img
                          style={{ width: 60, height: 60 }}
                          src={cumRap.hinhAnh}
                          alt=""
                        />
                        <div className="ml-2">
                          <p
                            style={{
                              fontSize: 20,
                              fontWeight: "bold",
                              lineHeight: 1,
                            }}
                            className=" text-2xl"
                          >
                            {cumRap.tenCumRap}
                          </p>
                          <p className="text-gray-400" style={{ marginTop: 0 }}>
                            {cumRap.tenCumRap}
                          </p>
                        </div>
                      </div>
                      <div className="thong-Tin-Lich-Chieu grid grid-cols-4 ">
                          {cumRap.lichChieuPhim.map((lichChieu,index)=>{
                              return <NavLink  to={`/booking/${id}`}>
                                  <Card className="shadow hover:shadow-none transition-all cursor-pointer mt-3">
                                  <div key={index} className="col-span-1 text-green-500">
                                     {moment(lichChieu.ngayChieuGioChieu).format('DD/MM/YYYY ~ h:mm A')}
                              </div>
                              </Card>
                              </NavLink>
                          })}
                      </div>
                    </div>
                  );
                })}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    );
}
