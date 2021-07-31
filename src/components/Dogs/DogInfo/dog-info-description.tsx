import * as React from "react";
import { ManOutlined, WomanOutlined } from "@ant-design/icons";

import { Typography, Row, Col, Card } from "antd";

const { Title } = Typography;

interface IProps {
  dog: IDogData;
}
const DogInfoDescription: React.FC<IProps> = (props) => {
  const { dog } = props;
  return (
    <>
      <Title
        style={{
          textAlign: "center",
          fontSize: 60,
          fontFamily: "Abel",
        }}
      >
        {dog.dog_name}
      </Title>

      <Row>
        <Col span={12}>
          <p
            style={{
              fontFamily: "Abel",

              textAlign: "center",
              fontSize: 45,
              color: dog.dog_gender === "Male" ? "#1790FF" : "pink",
            }}
          >
            {dog.dog_gender}
            <br />
            {dog.dog_gender === "Male" ? <ManOutlined /> : <WomanOutlined />}
          </p>
        </Col>

        <Col span={12}>
          <p
            style={{
              fontFamily: "Abel",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            I am
            <br />
            <span style={{ fontSize: 45 }}> {dog.dog_age} </span>
            <br />
            years old!
          </p>
        </Col>
      </Row>

      <Card
        style={{
          borderStyle: "solid",
          borderWidth: "5px",
          borderRadius: "10px",
        }}
      >
        <p
          style={{
            fontFamily: "Abel",
            textAlign: "center",
            fontSize: 24,
          }}
        >
          {dog.dog_characteristics}
        </p>
      </Card>
    </>
  );
};

export default DogInfoDescription;
