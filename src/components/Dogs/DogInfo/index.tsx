import React, { FC, useState } from "react";
import { ManOutlined, WomanOutlined } from "@ant-design/icons";

import { Modal, Typography, Row, Col, Carousel, Empty, Card, Grid } from "antd";

const { Title } = Typography;

const GalleryArr = [1, 2, 3, 4];

interface IProps {
  dog: IDogData;
  images: IDogImageEndpoint[];
  modal: boolean;
  showModal: (modal: boolean) => void;
}

const DogInfo: FC<IProps> = ({ dog, images, modal, showModal }) => {
  const bp = Grid.useBreakpoint();
  const isMobile = (bp.xs || bp.sm) && !bp.md;

  return (
    <>
      <Modal
        width={"75%"}
        footer={false}
        onCancel={() => showModal(false)}
        visible={modal}
      >
        <Row justify="space-between">
          <Col xs={24} lg={10} span={12}>
            <Carousel autoplay autoplaySpeed={3000} dotPosition="top">
              {GalleryArr.map((num) => {
                const imageToDisplay = images.filter(
                  (image) => image.gallery_position == num
                )[0];

                return imageToDisplay ? (
                  <img
                    height={isMobile ? "300px" : "700px"}
                    object-fit="cover"
                    src={imageToDisplay.image_url}
                  />
                ) : (
                  true
                );
              })}
            </Carousel>
            {images.length == 0 && (
              <Empty
                description={false}
                imageStyle={{ height: "500px", width: "100%" }}
              />
            )}
          </Col>

          <Col lg={12} span={24}>
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
                  {dog.dog_gender === "Male" ? (
                    <ManOutlined />
                  ) : (
                    <WomanOutlined />
                  )}
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
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default DogInfo;
