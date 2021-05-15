import * as React from "react";
import { Card, Col } from "antd";

const { Meta } = Card;
const ExcoCard: React.FC = () => {
  return (
    <>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <>
              <img
                src={`https://pyxis.nymag.com/v1/imgs/310/524/bfe62024411af0a9d9cd23447121704d7a-11-spongebob-squarepants.2x.rhorizontal.w700.jpg`}
              />
              <div style={{ height: "50px", backgroundColor: "black" }}>
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "30px",
                    marginBottom: "0px",
                  }}
                >
                  <b> Project Director</b>
                </p>
              </div>
            </>
          }
        >
          <Meta
            title="Exco Name"
            description={
              <>
                <p>{`Favourite Dog: <Insert Text Here>`}</p>
                <p>{`Year: <Insert Text Here>`}</p>
                <p>
                  {`Tell me about yourself:`}
                  <br />
                  {`<Insert Text Here>`}
                </p>
              </>
            }
          />
        </Card>
      </Col>
    </>
  );
};

export default ExcoCard;
