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
} from "antd";

const { Title } = Typography;
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const DogInfo: FC<{ dogSelected: string; modal: boolean; showModal: any }> = ({
  dogSelected,
  modal,
  showModal,
}) => {
  const filteredImages = images.filter((image) => image.dog == dogSelected);
  // filteredImages.map((e) => console.log(e.src));
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
                <img
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={image.src}
                ></img>;
              })}
            </Carousel>
          </Col>
          <Col xs={24} lg={12} span={12}>
            <Title style={{ textAlign: "center" }}>{dogSelected}</Title>
            <List
              style={{}}
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default DogInfo;
