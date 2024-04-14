/** @format */

import { Spin } from "antd";
import React, { useState } from "react";

export default function ModalTrailer({ src }) {
  const [videoLoading, setVideoLoading] = useState(true);

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div className={"modal"}>
      <div className="intro">Thông tin phim</div>
      <iframe
        className={"video-style"}
        onLoad={spinner}
        loading="lazy"
        width="800"
        height="500"
        src={`${src}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
