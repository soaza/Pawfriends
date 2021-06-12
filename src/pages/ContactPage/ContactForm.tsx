import * as React from "react";
import { Card, Row, Col, Typography } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { SocialIcon } from "react-social-icons";

const ContactForm: React.FC = () => {
  return (
    <Row justify="center">
      <Col span={18}>
        <Row justify="center">
          <img
            style={{ height: 300 }}
            src={process.env.PUBLIC_URL + "/Dogs/Lucky.jpg"}
          />
          <img
            style={{ height: 300 }}
            src={process.env.PUBLIC_URL + "/Dogs/Hugo.jpg"}
          />
          <img
            style={{ height: 300 }}
            src={process.env.PUBLIC_URL + "/Dogs/Rambo_2.jpg"}
          />
          <img
            style={{ height: 300 }}
            src={process.env.PUBLIC_URL + "/Dogs/Rambo_and_Junie.jpg"}
          />
        </Row>

        <Row justify="center">
          <h2 style={{ textAlign: "center", fontSize: 30 }}>
            <strong> Connect with Us!</strong>
          </h2>
        </Row>

        <Row justify="center">
          <SocialIcon
            style={{ marginRight: 20 }}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.facebook.com/nuspawfriends/");
            }}
            url="https://www.facebook.com/nuspawfriends/"
          />

          <SocialIcon
            style={{ marginRight: 20 }}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.instagram.com/nuspawfriends/?hl=en");
            }}
            url="https://www.instagram.com/nuspawfriends/?hl=en"
          />

          <SocialIcon url="mailto:nuspawfriends@gmail.com " />
        </Row>
      </Col>
    </Row>
  );
};

export default ContactForm;
