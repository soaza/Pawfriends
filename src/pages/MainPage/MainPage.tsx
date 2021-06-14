import React, { FC } from "react";
import "../../App.css";
import Introduction from "./introduction";
import Banner from "../../components/Common/Banner";
import FadeIn from "react-fade-in";
import { Col, Row } from "antd";
import Boxes from "./Boxes";

const MainPage: FC = () => (
  <>
    <Banner title="NUS Pawfriends" bannerUrl="main-page" />

    <Row justify="center">
      <Col span={20}>
        <FadeIn>
          <Introduction />
        </FadeIn>

        <Boxes />
      </Col>
    </Row>
  </>
);

export default MainPage;
