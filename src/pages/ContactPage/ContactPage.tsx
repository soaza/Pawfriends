import { FC, CSSProperties } from "react";
import { Typography } from "antd";

import "../../App.css";
import ContactForm from "./ContactForm";
import FadeIn from "react-fade-in";
import Banner from "../../components/Common/Banner";

const ContactPage: FC = () => (
  <>
    <Banner title="Contact Us" bannerUrl="contact-page" />

    <FadeIn>
      <ContactForm />
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
  },
};

export default ContactPage;
