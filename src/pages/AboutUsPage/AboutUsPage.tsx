import { Col, Row } from "antd";
import { FC } from "react";

import "../../App.css";
import Banner from "../../components/Common/Banner";
import Boxes from "./Boxes";

const AboutUsPage: FC = () => (
  <>
    <Banner title="About Us" bannerUrl="contact-page" />

    <Row justify="center">
      <Col span={20}>
        <Boxes />
      </Col>
    </Row>
  </>
);

export default AboutUsPage;
