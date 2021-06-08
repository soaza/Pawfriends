import * as React from "react";
import { Card, Row, Col, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;
const Introduction: React.FC = () => {
  return (
    <>
      <Row justify="space-between">
        <Col span={12}>
          <Row justify="center">
            <Avatar
              size={120}
              icon={<img src={process.env.PUBLIC_URL + "/Dogs/Lucky_2.jpg"} />}
            />
          </Row>
          <Title style={{ textAlign: "center" }}>NUS Pawfriends</Title>
          <p style={{ fontSize: 16 }}>
            <p>
              Hi we are NUS Pawfriends! NUS Pawfriends is a student volunteer
              group under NUS PEACE. We aim to improve the welfare of the
              shelter dog community 🐶🐕.
            </p>
            <p>
              We volunteer at the animal lodge at Choa Chu Kang, where we visit
              the shelter dogs weekly to walk them,bathe them as well as clean
              their kennels.
            </p>
            <p>
              Interested to join us in the upcoming semester?
              <a href="/contact"> Contact Us </a>
              and let us know your interest!
            </p>
          </p>
        </Col>
        <Col span={10}>
          <video
            controls
            style={{ height: 400, width: 600 }}
            src={process.env.PUBLIC_URL + "/MainPage/video.mp4"}
          />
        </Col>
      </Row>
    </>
  );
};

export default Introduction;
