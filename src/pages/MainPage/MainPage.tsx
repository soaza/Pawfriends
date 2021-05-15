import React, { FC, CSSProperties } from "react";
import { Button, Typography, Row } from "antd";
import Background from "../../Resources/Images/Background/main-page.jpeg";
import DefaultLayout from "../../components/Layout";
import Dogs from "../../components/Dogs";
import { motion } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import "../../App.css";

const { Title, Text } = Typography;

const MainPage: FC = () => (
  <>
    <div style={box}>
      <div style={text}>
        <Text style={{ fontSize: "60px", color: "white" }}>
          <b>NUS Pawfriends</b>
        </Text>
      </div>
      {
        <img
          style={{ objectFit: "cover" }}
          height="400px"
          width="100%"
          src={Background}
        ></img>
      }
    </div>
  </>
);

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

export default MainPage;
