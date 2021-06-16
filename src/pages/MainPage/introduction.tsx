import * as React from "react";
import { Row, Col, Avatar, Typography, Grid, Skeleton } from "antd";
import { getMainDescription } from "../../common/api";
import ReactHTMLParser from "react-html-parser";

const { Title } = Typography;
const { useEffect, useState } = React;
const Introduction: React.FC = () => {
  const [intro, setIntro] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const bp = Grid.useBreakpoint();
  const isMobile = (bp.xs || bp.sm) && !bp.md;

  const loadIntro = async () => {
    setLoading(true);
    const desc = await getMainDescription();
    setIntro(desc);
    setLoading(false);
  };

  useEffect(() => {
    loadIntro();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      loadIntro();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Row justify="space-between">
        <Col span={24} lg={12}>
          <Row justify="center">
            <Avatar
              size={120}
              icon={
                <img
                  alt="lucky"
                  src={process.env.PUBLIC_URL + "/Dogs/Lucky_2.jpg"}
                />
              }
            />
          </Row>
          <Title style={{ textAlign: "center" }}>NUS Pawfriends</Title>
          {loading && <Skeleton />}
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
