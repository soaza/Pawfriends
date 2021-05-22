import { FC, CSSProperties } from "react";
import { Typography, Card, Row, Col, Divider } from "antd";

import "../../App.css";
import ExcoCard from "../../components/Exco/ExcoCard";
import Banner from "../../components/Common/Banner";
import FadeIn from "react-fade-in";

const excos = [1, 1, 1, 1, 1, 1];
const ExcoPage: FC = () => (
  <>
    <Banner title="Our Exco" bannerUrl="exco" />

    <FadeIn>
      <Row justify="center">
        <Col span={20}>
          <Row gutter={[20, 20]}>
            {excos.map((exco) => {
              return <ExcoCard />;
            })}
          </Row>
        </Col>
      </Row>
    </FadeIn>
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
