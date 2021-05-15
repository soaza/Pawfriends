import React, { FC, CSSProperties, useState } from "react";
import { Button, Typography, Row } from "antd";
import Background from "../../Resources/Images/Background/dogs.jpeg";
import Dogs from "../../components/Dogs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../App.css";
import FadeIn from "react-fade-in";

const { Title, Text } = Typography;

const DogPage: FC = () => {
  return (
    <>
      <div style={box}>
        <div style={text}>
          <Text style={{ fontSize: "60px", color: "white" }}>
            <b>Our Dogs</b>
          </Text>
        </div>
        <img
          style={{ objectFit: "cover" }}
          height="400px"
          width="100%"
          src={Background}
        ></img>
      </div>

      <FadeIn>
        <Dogs />
      </FadeIn>
    </>
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

export default DogPage;
