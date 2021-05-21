import * as React from "react";
import { Card, Row, Col, Typography } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";

const { Title } = Typography;
const ContactForm: React.FC = () => {
  return (
    <Row justify="center">
      <Col span={18}>
        <Card
          style={{
            marginTop: "20px",
            borderStyle: "solid",
            minHeight: "200px",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <Row justify="center">
            <Title>Contact Us</Title>
          </Row>
          <Row justify="center">
            <FacebookFilled style={{ fontSize: "80px" }} />
            <InstagramFilled style={{ fontSize: "80px" }} />
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ContactForm;
