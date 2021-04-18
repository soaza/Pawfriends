import React, { FC, useState } from "react";
import images from "../../Gallery/images";
import pic from "../../../Resources/Images/Dogs/Hugo_2.jpg";
import {
  Modal,
  Typography,
  Row,
  Col,
  List,
  Descriptions,
  Carousel,
} from "antd";

const { Title } = Typography;
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const DogInfo: FC<{ dog: string; modal: boolean; showModal: any }> = ({
  dog,
  modal,
  showModal,
}) => {
  const filteredImages = images.filter((image) => image.dog == dog);
  return (
    <>
      <Modal
        width={"75%"}
        footer={false}
        onCancel={() => showModal(false)}
        visible={modal}
      >
        <Row>
          <Col xs={24} lg={12} span={12}>
            <Carousel dotPosition="top">
              {filteredImages.map((image) => {
                return (
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={image.src}
                  ></img>
                );
              })}
            </Carousel>
          </Col>
          <Col xs={24} lg={12} span={12}>
            <Title
              style={{ fontFamily: "Cabin,sans-serif", textAlign: "center" }}
            >
              {dog}
            </Title>
            <Descriptions
              style={{
                borderBlock: "2px solid",

                marginLeft: "20px",
              }}
              labelStyle={{
                fontSize: "20px",
                textAlign: "center",
              }}
              contentStyle={{
                fontSize: "16px",
              }}
              bordered
            >
              <Descriptions.Item label="Gender" span={3}>
                Insert Gender Here
              </Descriptions.Item>
              <Descriptions.Item label="Blood Type" span={3}>
                Insert Blood Type Here
              </Descriptions.Item>
              <Descriptions.Item label="Breed" span={3}>
                Insert Breed Here
              </Descriptions.Item>
              <Descriptions.Item label="Characteristics" span={3}>
                Insert Characteristics Here
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default DogInfo;
