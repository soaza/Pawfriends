import React, { FC, CSSProperties } from "react";
import { Typography } from "antd";

const { Text } = Typography;

interface IProps {
  bannerUrl: string;
  title: string;
}
const Banner: React.FC<IProps> = (props) => {
  const { bannerUrl, title } = props;

  return (
    <div style={box}>
      <div style={text}>
        <Text style={{ fontSize: "60px", color: "white" }}>
          <b>{title}</b>
        </Text>
      </div>
      <img
        height="200px"
        style={{ objectFit: "cover" }}
        width="100%"
        src={process.env.PUBLIC_URL + `/BannerImages/${bannerUrl}.jpeg`}
      ></img>
    </div>
  );
};

const box: CSSProperties = {
  position: "relative",
  textAlign: "center",
  color: "white",
  marginBottom: "64px",
};

const text: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const s = {
  title: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // color: "black",
    // fontFamily: "Arial",
    // fontSize: "50px",
    // lineHeight: "48px",
    // margin: " 0 0 50px",
    // textShadow: "1px 1px 2px #082b34",
  },
};

export default Banner;
