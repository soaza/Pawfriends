import { FC, CSSProperties } from "react";
import "../../App.css";
import Introduction from "./introduction";
import Banner from "../../components/Common/Banner";
import FadeIn from "react-fade-in";

const MainPage: FC = () => (
  <>
    <Banner title="NUS Pawfriends" bannerUrl="main-page" />

    <FadeIn>
      <Introduction />
    </FadeIn>
  </>
);

const box: CSSProperties = {
  position: "relative",
  textAlign: "center",
  color: "white",
  marginBottom: "64px",
};

const text: CSSProperties = {
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

export default MainPage;
