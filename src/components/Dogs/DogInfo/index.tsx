import React, { FC, useState } from "react";
import { ManOutlined, WomanOutlined } from "@ant-design/icons";

import {
  Modal,
  Typography,
  Row,
  Col,
  List,
  Descriptions,
  Carousel,
  Empty,
  Card,
} from "antd";

const { Title } = Typography;

const GalleryArr = [1, 2, 3, 4];

interface IProps {
  dog: IDogData;
  images: IDogImageEndpoint[];
  modal: boolean;
  showModal: (modal: boolean) => void;
}

const DogInfo: FC<IProps> = ({ dog, images, modal, showModal }) => {
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
                    height="700px"
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
                fontFamily: "Cabin,sans-serif",
              }}
            >
              {dog.dog_name}
            </Title>

            <Row>
              <Col span={24} lg={12}>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: 60,
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

              <Col span={24} lg={12}>
                <p style={{ textAlign: "center", fontSize: 30 }}>
                  I am
                  <br />
                  <span style={{ fontSize: 60 }}> {dog.dog_age} </span>
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
                  fontFamily: "Cabin,sans-serif",
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
