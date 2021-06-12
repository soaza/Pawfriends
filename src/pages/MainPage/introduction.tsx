import * as React from "react";
import { Card, Row, Col, Avatar, Typography, Grid } from "antd";
import { getMainDescription } from "../../common/api";
import ReactHTMLParser from "react-html-parser";

const { Title } = Typography;
const { useEffect, useState } = React;
const Introduction: React.FC = () => {
  const [intro, setIntro] = useState<string>();

  const bp = Grid.useBreakpoint();
  const isMobile = (bp.xs || bp.sm) && !bp.md;
  console.log(isMobile);

  useEffect(() => {
    const loadIntro = async () => {
      const desc = await getMainDescription();
      setIntro(desc);
    };
    loadIntro();
  }, []);
  return (
    <>
      <Row justify="space-between">
        <Col span={24} lg={12}>
          <Row justify="center">
            <Avatar
              size={120}
              icon={<img src={process.env.PUBLIC_URL + "/Dogs/Lucky_2.jpg"} />}
            />
          </Row>
          <Title style={{ textAlign: "center" }}>NUS Pawfriends</Title>
          {intro && <p style={{ fontSize: 16 }}>{ReactHTMLParser(intro)}</p>}
        </Col>
        <Col span={24} lg={10}>
          <video
            controls
            style={{ height: 400, width: isMobile ? "80vw" : 600 }}
            src={process.env.PUBLIC_URL + "/MainPage/video.mp4"}
          />
        </Col>
      </Row>
    </>
  );
};

export default Introduction;
