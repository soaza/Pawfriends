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
            <strong>Our Dogs</strong>
            <Link to="/" />
          </Menu.Item>

          <Menu.Item style={s.Menu} key="exco">
            <strong>Our Exco</strong>
            <Link to="/exco" />
          </Menu.Item>

          <Menu.Item style={s.Menu} key="activities">
            <strong>What We Do</strong>
            <Link to="/" />
          </Menu.Item>

          <Menu.Item style={s.Menu} key="activities">
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
