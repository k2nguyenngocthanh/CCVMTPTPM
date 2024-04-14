/** @format */

import { Carousel, message } from "antd";
import { useEffect, useState } from "react";
import { movieServ } from "../../../Service/movieService";

const CarouselHomepage = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    movieServ
      .getBannerMovie()
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => {
        message.error("Can't download data!");
        console.log(err);
      });
  }, []);

  let renderBanner = () => {
    return banner.map((item, index) => {
      return (
        <div key={index}>
          <img  className="w-full aspect-w-16 aspect-h-9 object-fill h-96" src={`http://localhost:8080/public/banner_img/${item.hinh_anh}`} alt="" />
        </div>
      );
    });
  };

  return (
    <div className="h-full w-full">
      <Carousel autoplay>{renderBanner()}</Carousel>
    </div>
  );
};

export default CarouselHomepage;
