import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../components/images/cryp.avif";

const Navbar = ({ theme }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: theme === "light" ? "#000" : "#fff",
              textDecoration: "none",
            }}
          >
            Ovary-x
          </Link>
        </Typography.Title>
        <Button
          style={{
            border: "none",
            background: "none",
            display: screenSize >= 768 ? "none" : "inline-flex",
          }}
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined
            style={{
              width: "40px",
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "5px",
            }}
          />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" mode="vertical" style={{ marginTop: "3rem" }}>
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
