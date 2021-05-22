import * as React from "react";
import { Button, Typography, Row } from "antd";
import Background from "../../Resources/Images/Background/dogs.jpeg";
import Dogs from "../../components/Dogs";
import "../../App.css";
import FadeIn from "react-fade-in";
import { getDogs } from "../../common/api";
import Banner from "../../components/Common/Banner";

const { Text } = Typography;
const { useEffect, useState } = React;

const DogPage: React.FC = () => {
  const [dogs, setDogs] = useState<IDog[]>();

  useEffect(() => {
    const loadDogs = async () => {
      const dogs = await getDogs();
      setDogs(dogs);
    };
    loadDogs();
  }, []);

  return (
    <>
      <Banner title="Our Dogs" bannerUrl="dogs" />

      {dogs && (
        <FadeIn>
          <Dogs dogs={dogs} />
        </FadeIn>
      )}
    </>
  );
};

const box: React.CSSProperties = {
  position: "relative",
  textAlign: "center",
  color: "white",
  marginBottom: "64px",
};

const text: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const s = {
  title: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // color: "black",
    // fontFamily: "Arial",
    // fontSize: "50px",
    // lineHeight: "48px",
    // margin: " 0 0 50px",
    // textShadow: "1px 1px 2px #082b34",
  },
};

export default DogPage;
