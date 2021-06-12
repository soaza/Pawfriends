import * as React from "react";
import Dogs from "../../components/Dogs";
import "../../App.css";
import FadeIn from "react-fade-in";
import { getDogs } from "../../common/api";
import Banner from "../../components/Common/Banner";
import { Spin } from "antd";

const { useEffect, useState } = React;

const DogPage: React.FC = () => {
  const [dogs, setDogs] = useState<IDogData[]>();
  const [dogImages, setDogImages] = useState<IDogImageEndpoint[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadDogs = async () => {
      setLoading(true);
      const response = await getDogs();
      setDogs(response.dogs);
      setDogImages(response.images);
      setLoading(false);
    };
    loadDogs();
  }, []);

  return (
    <>
      <Banner title="Our Dogs" bannerUrl="dogs" />

      {loading && (
        <Spin
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}

      {dogs && dogImages.length > 0 && (
        <FadeIn>
          <Dogs dogs={dogs} dogImages={dogImages} />
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
