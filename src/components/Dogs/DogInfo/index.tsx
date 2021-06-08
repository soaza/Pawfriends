import React, { FC, useState } from "react";
import images from "../../Gallery/images";
import {
  Modal,
  Typography,
  Row,
  Col,
  List,
  Descriptions,
  Carousel,
  Empty,
} from "antd";

const { Title } = Typography;

interface IProps {
  dog: IDog;
  modal: boolean;
  showModal: (modal: boolean) => void;
}

const DogInfo: FC<IProps> = ({ dog, modal, showModal }) => {
  const filteredImages = images.filter((image) => image.dog == dog.dog_name);
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
            <Carousel autoplay autoplaySpeed={3000} dotPosition="top">
              {filteredImages.map((image) => {
                return (
                  <img height="700px" object-fit="cover" src={image.src}></img>
                );
              })}
            </Carousel>
            {filteredImages.length == 0 && (
              <Empty
                description={false}
                imageStyle={{ height: "500px", width: "100%" }}
              />
            )}
          </Col>
          <Col xs={24} lg={12} span={12}>
            <Title
              style={{ fontFamily: "Cabin,sans-serif", textAlign: "center" }}
            >
              {dog.dog_name}
            </Title>
            <Descriptions
              style={{
                width: "100%",
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
                {dog.dog_gender}
              </Descriptions.Item>

              <Descriptions.Item label="Age" span={3}>
                {dog.dog_age}
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
