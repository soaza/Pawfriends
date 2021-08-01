import * as React from "react";
import { Row, Col, Grid, Card } from "antd";
import { SocialIcon } from "react-social-icons";

const ContactForm: React.FC = () => {
  const pawfriendsLinks = [
    {
      link: "https://www.facebook.com/nuspawfriends/",
      title: "NUS Pawfriends",
      description: "Check out our Facebook page",
    },
    {
      link: "https://www.instagram.com/nuspawfriends/?hl=en",
      title: "@nuspawfriends",
      description: "Check out our Instagram page",
    },
    {
      link: "mailto:nuspawfriends@gmail.com",
      title: "nuspawfriends@gmail.com",
      description: "Contact us by email",
    },
  ];

  const nusPeaceLinks = [
    {
      link: "https://www.facebook.com/nuspawfriends/",
      title: "NUS Pawfriends",
      description: "Check out our Facebook page",
    },
    {
      link: "https://www.instagram.com/nuspawfriends/?hl=en",
      title: "@nuspawfriends",
      description: "Check out our Instagram page",
    },
    {
      link: "mailto:nuspawfriends@gmail.com",
      title: "nuspawfriends@gmail.com",
      description: "Contact us by email",
    },
  ];
  return (
    <Row justify="center">
      <Col span={15}>
        <Row justify="space-between">
          <Col span={10}>
            <h1>Connect with us!</h1>

            {pawfriendsLinks.map((link) => {
              return (
                <Card>
                  <Row>
                    <SocialIcon
                      style={{ marginRight: 20 }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(link.link);
                      }}
                      url={link.link}
                    />
                    <Col style={{ textAlign: "center" }}>
                      <h2>
                        <b>{link.title}</b>
                      </h2>
                      <p>{link.description}</p>
                    </Col>
                  </Row>
                </Card>
              );
            })}
          </Col>

          <Col span={10}>
            <h1>A subcommittee of NUSPeace</h1>

            {nusPeaceLinks.map((link) => {
              return (
                <Card>
                  <Row>
                    <SocialIcon
                      style={{ marginRight: 20 }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(link.link);
                      }}
                      url={link.link}
                    />
                    <Col style={{ textAlign: "center" }}>
                      <h2>
                        <b>{link.title}</b>
                      </h2>
                      <p>{link.description}</p>
                    </Col>
                  </Row>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ContactForm;
