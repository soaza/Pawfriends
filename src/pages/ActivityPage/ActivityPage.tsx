import React, { FC, CSSProperties } from "react";
import { Typography } from "antd";
import Background from "../../Resources/Images/Background/activity-page.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../App.css";
import ActivityBoard from "./ActivityBoard";
import FadeIn from "react-fade-in";
import Banner from "../../components/Common/Banner";

const { Text } = Typography;

const ActivityPage: FC = () => (
  <>
    <Banner title="What we do" bannerUrl="activity-page" />

    <FadeIn>
      <ActivityBoard />
    </FadeIn>
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

export default ActivityPage;
