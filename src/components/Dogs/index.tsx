import * as React from "react";
import { Col, Row, Alert } from "antd";
import DogCard from "./DogCard";

const Dogs: React.FC<{ dogs: IDogData[]; dogImages: IDogImageEndpoint[] }> = ({
  dogs,
  dogImages,
}) => {
  return (
    <>
      <Row justify="center">
        <Col span={20}>
          <Alert
            style={{ marginBottom: 20 }}
            showIcon
            message=""
            description="Click on any dog to see it learn more about our good bois"
            type="info"
          />
          <Row gutter={[20, 20]}>
            {dogs.map((dog: IDogData) => {
              const filteredImages = dogImages.filter(
                (image) => image.dog_id === dog.dog_id
              );

              return (
                <DogCard
                  dog={dog}
                  images={filteredImages ? filteredImages : []}
                />
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dogs;
