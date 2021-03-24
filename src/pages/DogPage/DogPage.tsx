import React, { FC, CSSProperties } from "react";
import { Button, Typography, Row } from "antd";
import Background from "../../Resources/Images/Background/dogs.jpeg";
import DefaultLayout from "../../components/Layout";
import Dogs from "../../components/Dogs";
import { motion } from "framer-motion";

const { Title, Text } = Typography;
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const DogPage: FC = () => (
  <>
    <DefaultLayout page={"dogs"}></DefaultLayout>
    <motion.div
      style={{ position: "absolute" }}
      exit="out"
      initial="initial"
      animate="in"
      transition={pageTransition}
      variants={pageVariants}
    >
      {" "}
      <div style={box}>
        <div style={text}>
          <Text style={{ fontSize: "60px", color: "white" }}>
            <b>Our Dogs</b>
          </Text>
        </div>
        {<img height="400px" width="100%" src={Background}></img>}
      </div>
      <Dogs />
    </motion.div>
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

export default DogPage;
