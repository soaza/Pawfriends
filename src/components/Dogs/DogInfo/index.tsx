import { FC } from "react";

import { Modal, Row, Col, Carousel, Empty, Grid, Tabs } from "antd";
import DogInfoDescription from "./dog-info-description";

interface IProps {
  dog: IDogData;
  images: IDogImageEndpoint[];
  modal: boolean;
  showModal: (modal: boolean) => void;
}

const { TabPane } = Tabs;

const DogInfo: FC<IProps> = ({ dog, images, modal, showModal }) => {
  const bp = Grid.useBreakpoint();
  const isMobile = (bp.xs || bp.sm) && !bp.md;

  return (
    <>
      <Modal
        width={"70%"}
        footer={false}
        onCancel={() => showModal(false)}
        visible={modal}
      >
        <Row justify="space-between">
          <Col xs={24} lg={8} span={12}>
            <Carousel autoplay autoplaySpeed={1500} dotPosition="top">
              {Array.from(Array(4)).map((_, num) => {
                const imageToDisplay = images.filter(
                  (image) => image.gallery_position === num
                )[0];

                return imageToDisplay ? (
                  <img
                    alt="carousell-img"
                    height={isMobile ? 300 : 500}
                    object-fit="cover"
                    src={imageToDisplay.image_url}
                  />
                ) : (
                  true
                );
              })}
            </Carousel>
            {images.length === 0 && (
              <Empty
                description={false}
                imageStyle={{ height: "500px", width: "100%" }}
              />
            )}
          </Col>

          <Col lg={14} span={24}>
            <Tabs defaultActiveKey="1" tabPosition={isMobile ? "top" : "right"}>
              <TabPane tab={"Description"} key="1">
                <DogInfoDescription dog={dog} />
              </TabPane>

              <TabPane
                style={{
                  overflowX: "scroll",
                  overflowY: "scroll",
                  height: 500,
                }}
                tab={"My activities"}
                key="2"
              >
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHopeForAnimalsSG%2Fposts%2F4425690077445469&show_text=true&width=500"
                  style={{ border: "none", overflow: "hidden" }}
                  height={800}
                  width={500}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default DogInfo;
