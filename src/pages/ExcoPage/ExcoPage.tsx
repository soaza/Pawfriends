import React, { FC, useEffect, useState } from "react";
import { Row, Col, Spin } from "antd";

import "../../App.css";
import ExcoCard from "../../components/Exco/ExcoCard";
import Banner from "../../components/Common/Banner";
import FadeIn from "react-fade-in";
import { getExcos } from "../../common/api";

const ExcoPage: FC = () => {
  const [excos, setExcos] = useState<IExcoData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadExcos = async () => {
      setLoading(true);

      const response = await getExcos();
      setExcos(response);
      setLoading(false);
    };
    loadExcos();
  }, []);
  return (
    <>
      <Banner title="Our Exco" bannerUrl="exco" />

      {loading && (
        <Spin
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}

      <FadeIn>
        <Row justify="center">
          <Col span={20}>
            <Row gutter={[20, 20]}>
              {excos.map((exco) => {
                return <ExcoCard exco={exco} />;
              })}
            </Row>
          </Col>
        </Row>
      </FadeIn>
      <div style={{ height: "50px" }}></div>
    </>
  );
};

export default ExcoPage;
