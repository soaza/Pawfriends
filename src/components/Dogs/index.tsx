import React, { FC, CSSProperties } from "react";
import { Col, Row } from "antd";
import DogCard from "./DogCard";

// const DogArray = ["Lucky", "Junie", "BabyGirl", "Rambo"];
const DogArray = ["Lucky", "Hugo", "Rambo"];
const Dogs: FC = () => (
  <>
    <Row justify="center">
      <Col span={20}>
        <Row>
          {DogArray.map((dog) => (
            <DogCard dog={dog} />
          ))}
        </Row>
      </Col>
    </Row>
  </>
);

export default Dogs;
