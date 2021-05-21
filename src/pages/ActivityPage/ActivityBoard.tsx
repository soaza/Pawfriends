import * as React from "react";
import { Card, Row, Col, Typography, Skeleton } from "antd";

const { Title } = Typography;
const arr = [1, 1, 1, 1];

const ActivityBoard: React.FC = () => {
  return (
    <>
      <Row gutter={[20, 20]} justify="center">
        <Col span={18}>
          {arr.map((post) => {
            return (
              <Card
                style={{
                  marginTop: "20px",
                  borderStyle: "solid",
                  borderWidth: "5px",
                  minHeight: "200px",
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                <Title level={3}>21/5/21: Activity Details</Title>
                <Skeleton avatar paragraph={{ rows: 4 }} />
              </Card>
            );
          })}
        </Col>
      </Row>
      <div style={{ height: "400px" }} />
    </>
  );
};

export default ActivityBoard;
