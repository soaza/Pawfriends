import React, { FC, useState } from "react";
import { Card, Layout } from "antd";
import DogInfo from "../DogInfo";
import images from "../../Gallery/images";

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const DogCard: FC<{ dog: string }> = ({ dog }) => {
  // For each dog we only want the first picture as DP
  const filteredImages = images
    .filter((image) => image.dog == dog)
    .filter((image) => image.id == 1);

  const imageToShow = filteredImages[0].src;
  const [modal, showModal] = useState<boolean>(false);
  return (
    <>
      <DogInfo dog={dog} modal={modal} showModal={showModal}></DogInfo>
      <Card
        hoverable
        onClick={(e) => {
          showModal(true);
        }}
        style={{ width: 240, marginBottom: "20px" }}
        cover={<img src={imageToShow} />}
      >
        <Meta title={dog} description="Good boi" />
      </Card>
    </>
  );
};
export default DogCard;
