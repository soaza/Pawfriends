import * as React from "react";
import { Card, Col, Row } from "antd";

const { Meta } = Card;

interface IProps {
  exco: IExcoData;
}
const ExcoCard: React.FC<IProps> = (props) => {
  const { exco } = props;
  const imageLink =
    process.env.PUBLIC_URL + `/ExcoImages/${exco.exco_name}.jpg`;

  return (
    <>
      <Col span={24} lg={8}>
        <Row justify="center">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <>
                <img style={{ height: 300 }} src={imageLink} />
                <div style={{ height: "50px", backgroundColor: "black" }}>
                  <p
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "30px",
                      marginBottom: "0px",
                    }}
                  >
                    <b>{exco.exco_role}</b>
                  </p>
                </div>
              </>
            }
          >
            <Meta
              title={`${exco.exco_name}`}
              description={
                <>
                  <p>{`Favourite Dog: ${exco.exco_favourite_dog}`}</p>
                  <p>{`Year: ${exco.exco_year_of_study}`}</p>
                  <p>
                    {`Hobbies:`}
                    <br />
                    {`${exco.exco_hobbies ? exco.exco_hobbies : "-"}`}
                  </p>
                </>
              }
            />
          </Card>
        </Row>
      </Col>
    </>
  );
};

export default ExcoCard;
