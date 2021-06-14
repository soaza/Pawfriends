import { FC } from "react";

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

export default ContactPage;
