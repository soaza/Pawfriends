import * as React from "react";
import { Col, Row } from "antd";
import DogCard from "./DogCard";

interface IDog {
  dog_id: number;
  dog_name: string;
  dog_gender: string;
  dog_age: number;
}

const Dogs: React.FC<{ dogs: IDog[] }> = ({ dogs }) => {
  return (
    <>
      <Row justify="center">
        <Col span={20}>
          <Row>
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
