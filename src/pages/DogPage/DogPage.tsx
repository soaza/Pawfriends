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

      {!loading && dogs && dogImages.length > 0 && (
        <FadeIn>
          <Dogs
            // dogs = {dogs}
            // We filter out Hugo's id cuz we cant show it in production :(
            dogs={dogs.filter((dog) => dog.dog_id !== 1)}
            dogImages={dogImages}
          />
        </FadeIn>
      )}
    </>
  );
};

export default DogPage;
