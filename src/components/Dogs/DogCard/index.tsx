import React, { FC, useState } from "react";
import { Card, Row, Col } from "antd";
import DogInfo from "../DogInfo";
import images from "../../Gallery/images";

const { Meta } = Card;

const DogCard: FC<{ dog: string }> = ({ dog }) => {
  // For each dog we only want the first picture as DP
  const filteredImages = images
    .filter((image) => image.dog == dog)
    .filter((image) => image.id == 1);

  const imageToShow = filteredImages[0].src;
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
            style={{ width: "50%", marginBottom: "20px" }}
            cover={<img height="300px" src={imageToShow} />}
          >
            <Meta title={dog} description="Good boi" />
          </Card>
        </Row>
      </Col>
    </>
  );
};
export default DogCard;
