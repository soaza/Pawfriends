import React, { FC, useState } from "react";
import { Card, Row, Col, Empty } from "antd";
import DogInfo from "../DogInfo";

const { Meta } = Card;

const DogCard: React.FC<{ dog: IDogData; images: IDogImageEndpoint[] }> = ({
  dog,
  images,
}) => {
  const imageToShow = images?.filter((image) => image.gallery_position == 0)[0]
    ?.image_url;
  const [modal, showModal] = useState<boolean>(false);
  return (
    <>
      <Col span={24} lg={8}>
        <DogInfo
          images={images}
          dog={dog}
          modal={modal}
          showModal={showModal}
        ></DogInfo>
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
                <Empty style={{ width: "100%" }} />
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
