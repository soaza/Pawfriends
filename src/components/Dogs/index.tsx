import React, { FC, CSSProperties } from "react";
import { Button, Typography, Row } from "antd";
import DogCard from "./DogCard";

// const DogArray = ["Lucky", "Junie", "BabyGirl", "Rambo"];
const DogArray = ["Lucky", "Hugo", "Rambo"];
const Dogs: FC = () => (
  <>
    <Row style={{ justifyContent: "space-around" }}>
      {DogArray.map((dog) => (
        <DogCard dog={dog} />
      ))}
    </Row>
  </>
);

export default Dogs;
