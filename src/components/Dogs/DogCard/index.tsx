import React, { FC, useState } from "react";
import { Card, Row, Col, Empty } from "antd";
import DogInfo from "../DogInfo";
import images from "../../Gallery/images";

const { Meta } = Card;

const DogCard: React.FC<{ dog: IDog }> = ({ dog }) => {
  console.log(dog);
  // For each dog we only want the first picture as DP
  const filteredImages = images
    .filter((image) => image.dog == dog.dog_name)
    .filter((image) => image.id == 0);

  const imageToShow = filteredImages[0]?.src;
  const [modal, showModal] = useState<boolean>(false);
  return (
    <>
      <Col span={8}>
        <DogInfo dog={dog} modal={modal} showModal={showModal}></DogInfo>
        <Row justify="center">
          <Card
            hoverable
            onClick={(e) => {
              showModal(true);
            }}
            style={{ width: "80%", marginBottom: "20px" }}
            cover={
              imageToShow ? (
                <img
                  style={{ objectFit: "cover" }}
                  height="400px"
                  src={imageToShow}
                />
              ) : (
                <Empty />
              )
            }
          >
            <Meta title={dog.dog_name} description="Good boi" />
          </Card>
        </Row>
      </Col>
    </>
  );
};
export default DogCard;
