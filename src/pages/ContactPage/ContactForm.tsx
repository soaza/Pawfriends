import * as React from "react";
import { Row, Col, Grid, Card, Tabs } from "antd";
import { SocialIcon } from "react-social-icons";
import ContactMap from "./contact-map";

const { TabPane } = Tabs;

const ContactForm: React.FC = () => {
  const pawfriendsLinks = [
    {
      link: "https://soaza.github.io/Pawfriends",
      title: "Pawfriends' Website",
      description: "You are here!",
    },
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
      link: "https://blog.nus.edu.sg/nuspeace/",
      title: "NUS Peace Website",
      description: "Check out NUS Peace's blog",
    },
    {
      link: "https://www.instagram.com/nus.peace",
      title: "@nus.peace",
      description: "Check out NUS Peace's Instagram page",
    },
    {
      link: "https://www.facebook.com/nuspeace.official/",
      title: "NUS Peace Facebook",
      description: "Check out NUS Peace's Facebook",
    },
    {
      link: "mailto:nus.peace@gmail.com",
      title: "nus.peace@gmail.com",
      description: "Contact NUS Peace by email",
    },
  ];

  const uncleKhoeLinks = [
    {
      link: "https://unclekhoek9.sg/",
      title: "Uncle Khoe's K9 Website",
      description: "Check out Uncle Khoe's K9 Website",
    },
    {
      link: "https://www.instagram.com/uncle_khoe_k9",
      title: "@uncle_khoe_k9",
      description: "Check out Uncle Khoe's K9 Instagram page",
    },
    {
      link: "https://www.facebook.com/Uncle-khoes-k9-518244711535396/",
      title: "Uncle Khoe's K9 Facebook",
      description: "Check out Uncle Khoe's K9 Facebook",
    },
    {
      link: "mailto:uncle.khoe.k9@gmail.com",
      title: "uncle.khoe.k9@gmail.com",
      description: "Contact Uncle Khoe by email",
    },
  ];

  const mmLinks = [
    {
      link: "https://www.muttsnmittensactive.com/",
      title: "Mutts and Mittens' Website",
      description: "Check out Mutts and Mittens' Website",
    },
    {
      link: "https://www.instagram.com/muttsnmittens",
      title: "@muttsnmittens",
      description: "Check out Mutts and Mittens' Instagram page",
    },
    {
      link: "https://www.facebook.com/muttsnmittens/",
      title: "Mutts and Mittens' Facebook",
      description: "Check out Mutts and Mittens' Facebook",
    },
    {
      link: "mailto:info@muttsnmittensactive.com",
      title: "info@muttsnmittensactive.com",
      description: "Contact Mutts and Mittens by email",
    },
  ];

  const links = [
    { category: "Pawfriends", linkArr: pawfriendsLinks },
    { category: "NUS Peace", linkArr: nusPeaceLinks },
    { category: "Uncle Khoe's", linkArr: uncleKhoeLinks },
    { category: "Mutts and Mittens", linkArr: mmLinks },
  ];

  return (
    <Row justify="center">
      <Col span={22} lg={18}>
        <ContactMap />
        <Tabs defaultActiveKey="1" tabPosition="top">
          {links.map((cate, index) => {
            return (
              <TabPane tab={cate.category} key={index}>
                <p style={{ color: "gray" }}>
                  Click on the icon to access the link in a new window
                </p>
                {cate.linkArr.map((link) => {
                  return (
                    <Card bodyStyle={{ textOverflow: "ellipsis" }}>
                      <Row>
                        <SocialIcon
                          style={{ marginRight: 20 }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(link.link);
                          }}
                          url={link.link}
                        />

                        <Col>
                          <h3>
                            <b>{link.title}</b>
                          </h3>
                          <p>{link.description}</p>
                        </Col>
                      </Row>
                    </Card>
                  );
                })}
              </TabPane>
            );
          })}
        </Tabs>
      </Col>
    </Row>
  );
};

export default ContactForm;
