import React, { FC, CSSProperties } from "react";
import { Typography, Card, Row, Col, Divider } from "antd";
import Background from "../../Resources/Images/Background/exco.jpeg";

import "../../App.css";
import ExcoCard from "../../components/Exco/ExcoCard";
import Banner from "../../components/Common/Banner";

const { Text } = Typography;
const { Meta } = Card;

const excos = [1, 1, 1, 1, 1, 1];
const ExcoPage: FC = () => (
  <>
    <Banner title="Our Exco" bannerUrl="exco" />

    <Row justify="center">
      <Col span={20}>
        <Row gutter={[20, 20]}>
          {excos.map((exco) => {
            return <ExcoCard />;
          })}
        </Row>
      </Col>
    </Row>
    <div style={{ height: "50px" }}></div>
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
  },
};

export default ExcoPage;
