import React, { useEffect, FC, CSSProperties } from "react";
import { Typography } from "antd";
import src from "*.avif";

const { Text } = Typography;

interface IProps {
  bannerUrl: string;
  title: string;
  noMargin?: boolean;
}
const Banner: React.FC<IProps> = (props) => {
  const { bannerUrl, title, noMargin } = props;

  useEffect(() => {
    const objects = document.getElementsByClassName("asyncImage");
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.getAttribute("data-src") as string;

      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove("asyncImage");
        item.setAttribute("src", img.src);
      };
    });
  }, []);

  return (
    <div style={{ ...box, marginBottom: !noMargin ? 64 : 0 }}>
      <div style={text}>
        <Text style={{ fontSize: "60px", color: "white" }}>
          <b>{title}</b>
        </Text>
      </div>
      <img
        // high reso image
        data-src={process.env.PUBLIC_URL + `/BannerImages/${bannerUrl}.jpeg`}
        className="asyncImage"
        height="400px"
        style={{ objectFit: "cover" }}
        width="100%"
        src={
          process.env.PUBLIC_URL +
          `/BannerImages/${bannerUrl}` +
          `-min` +
          `.jpeg`
        }
      ></img>
    </div>
  );
};

const box: CSSProperties = {
  position: "relative",
  textAlign: "center",
  color: "white",
  // marginBottom: "64px",
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
