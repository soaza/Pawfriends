import * as React from "react";
import { Col, Row } from "antd";
import DogCard from "./DogCard";

const Dogs: React.FC<{ dogs: IDog[] }> = ({ dogs }) => {
  return (
    <>
      <Row justify="center">
        <Col span={20}>
          <Row gutter={[20, 20]}>
            {dogs.map((dog: IDog) => {
              return <DogCard dog={dog} />;
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dogs;
