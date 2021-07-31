import React, { useEffect, CSSProperties } from "react";
import { Grid, Typography } from "antd";

const { Text } = Typography;

interface IProps {
  bannerUrl: string;
  title: string;
  noMargin?: boolean;
}
const Banner: React.FC<IProps> = (props) => {
  const { title, noMargin } = props;
  const isMobile = Grid.useBreakpoint().xs;

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
      return null;
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
        alt="banner"
        data-src={process.env.PUBLIC_URL + `/BannerImages/banner.jpeg`}
        className="asyncImage"
        height="400px"
        style={{ objectFit: isMobile ? "cover" : "fill" }}
        width="100%"
        src={process.env.PUBLIC_URL + `/BannerImages/banner-min.jpg`}
      ></img>
    </div>
  );
};

const box: CSSProperties = {
  position: "relative",
  textAlign: "center",
  color: "white",
};

const text: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default Banner;
