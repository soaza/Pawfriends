import React, { FC, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "../../App.css";

import { Link, BrowserRouter as Router } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const DefaultLayout: FC<{ page: string }> = ({ page }) => {
  return (
    <Layout>
      <Header style={{ zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          theme="dark"
          mode="horizontal"
          selectedKeys={[page]}
        >
          <Menu.Item style={s.Menu} key="/dogs">
            <strong>Our Dogs</strong>
            <Link to="/dogs" />
          </Menu.Item>

          <Menu.Item style={s.Menu} key="/exco">
            <strong>Our Exco</strong>
            <Link to="/exco" />
          </Menu.Item>

          <Menu.Item
            style={{ marginRight: "10px", color: "black", background: "white" }}
            key="/mainpage"
          >
            <strong>NUS Pawfriends </strong>
            <img
              color="white"
              height="16px"
              width="16px"
              src={process.env.PUBLIC_URL + "/paw.png"}
            ></img>
            <Link to="/pawfriends" />
          </Menu.Item>

          <Menu.Item style={s.Menu} key="/activity">
            <strong>What We Do</strong>
            <Link to="/activity" />
          </Menu.Item>

          <Menu.Item style={s.Menu} key="/contact">
            <strong>Contact Us</strong>
            <Link to="/contact" />
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

const s = {
  Menu: {
    marginRight: "10px",
  },
};

export default DefaultLayout;