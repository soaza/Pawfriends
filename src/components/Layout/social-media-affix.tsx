import { Affix, Space } from "antd";
import * as React from "react";
import { SocialIcon } from "react-social-icons";

const SocialMediaAffix: React.FC = () => {
  return (
    <Affix
      style={{
        marginTop: "60vh",
        zIndex: 100,
        position: "absolute",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Space direction="vertical">
          <SocialIcon
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.facebook.com/nuspawfriends/");
            }}
            url="https://www.facebook.com/nuspawfriends/"
          />

          <SocialIcon
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.instagram.com/nuspawfriends/?hl=en");
            }}
            url="https://www.instagram.com/nuspawfriends/?hl=en"
          />

          <SocialIcon url="mailto:nuspawfriends@gmail.com " />
        </Space>
      </div>
    </Affix>
  );
};

export default SocialMediaAffix;
