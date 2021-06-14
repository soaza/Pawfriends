import React from "react";
import "../../App.css";

import { Card, Col, Row } from "antd";

const Fade = require("react-reveal/Fade");

const boxesInfo = [
  {
    header: "About Us",
    info: `We are a group of students unified by a common passion for helping
    dogs at a shelter by volunteering on a weekly basis`,
  },
  {
    header: "Our Mission",
    info: `We aim to raise awareness of shelter/stray dogs situation in
    Singapore through social media and fundraisers`,
  },
  {
    header: "Adopt Don't Shop",
    info: ` We advocate the idea of adopting as we believe that shelter dogs
    deserve a second chance in life`,
  },
  {
    header: "Future Plans",
    info: `We seek to improve the physical and mental welfare of shelter dogs
    by bringing them for excursions whenever we can`,
  },
  {
    header: "Our Goal",
    info: `We strive to increase the adoptability of shelter dogs by training
    them to portray traits desired by potential adopters`,
  },
];
const Boxes: React.FC = () => {
  return (
    <>
      <Row
        style={{ marginTop: 20, marginBottom: 30 }}
        gutter={[30, 30]}
        justify="space-between"
      >
        {boxesInfo.map((box) => {
          return (
            <Col span={24} lg={12}>
              <Fade bottom>
                <Card
                  style={{
                    minHeight: 200,
                    borderColor: "#a5dff2",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  }}
                >
                  <p style={{ fontSize: 40, marginBottom: 0 }}>{box.header}</p>
                  <p style={{ fontSize: 16 }}>{box.info}</p>
                </Card>
              </Fade>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Boxes;
