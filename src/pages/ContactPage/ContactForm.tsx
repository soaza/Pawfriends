import * as React from "react";
import { Card, Row, Col, Typography } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";

const { Title } = Typography;
const ContactForm: React.FC = () => {
  return (
    <Row justify="center">
      <Col span={18}>
        <Row justify="center">
          <h2>Contact Us through Facebook or Instagram!</h2>
        </Row>
        <Row justify="center">
          <FacebookFilled style={{ fontSize: "80px" }} />
          <InstagramFilled style={{ fontSize: "80px" }} />
        </Row>
      </Col>
    </Row>
  );
};

export default ContactForm;
