import * as React from "react";
import Dogs from "../../components/Dogs";
import "../../App.css";
import FadeIn from "react-fade-in";
import { getDogs } from "../../common/api";
import Banner from "../../components/Common/Banner";

const { useEffect, useState } = React;

const DogPage: React.FC = () => {
  const [dogs, setDogs] = useState<IDogData[]>();
  const [dogImages, setDogImages] = useState<IDogImageEndpoint[]>([]);

  useEffect(() => {
    const loadDogs = async () => {
      const response = await getDogs();
      setDogs(response.dogs);
      setDogImages(response.images);
      console.log(response);
    };
    loadDogs();
  }, []);

  return (
    <>
      <Banner title="Our Dogs" bannerUrl="dogs" />

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
