import * as React from "react";
import { Card, Row, Col, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;
const Introduction: React.FC = () => {
  return (
    <>
      <Row justify="center">
        <Col span={18}>
          <Card
            style={{
              borderStyle: "solid",
              borderWidth: "5px",
              minHeight: "400px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <Row justify="center">
              <Avatar size={120} icon={<UserOutlined />} />
            </Row>
            <Title style={{ textAlign: "center" }}>NUS Pawfriends</Title>
            <p>
              Hi we are NUS Pawfriends Hi we are NUS Pawfriends Hi we are NUS
              Pawfriends Hi we are NUS Pawfriends Hi we are NUS Pawfriends Hi we
              are NUS Pawfriends Hi we are NUS Pawfriends Hi we are NUS
              Pawfriends Hi we are NUS Pawfriends Hi we are NUS Pawfriends
            </p>
          </Card>
        </Col>
      </Row>

      <div style={{ height: "400px" }} />
    </>
  );
};

export default Introduction;
