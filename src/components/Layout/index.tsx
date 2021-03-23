import React, { FC, useState } from "react";
import "../../App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, BrowserRouter as Router } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const DefaultLayout: FC<{ page: string }> = ({ page }) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
          theme="dark"
          mode="horizontal"
          selectedKeys={[page]}
        >
          <Menu.Item style={s.Menu} key="dogs">
            Our Dogs
            <Link to="/" />
          </Menu.Item>

          <Menu.Item style={s.Menu} key="exco">
            Our Exco
            <Link to="/exco" />
          </Menu.Item>

          <Menu.Item style={s.Menu} key="activities">
            What We Do
            <Link to="/" />
          </Menu.Item>

          <Menu.Item style={s.Menu} key="activities">
            Contact Us
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
