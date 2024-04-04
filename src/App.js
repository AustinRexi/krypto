import { React, useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space, Switch } from "antd";

import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Exchanges,
} from "./components";
import "./App.css";

const { Header, Content } = Layout;
const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <>
          {" "}
          <Layout theme={theme}>
            <Header
              style={{ background: theme === "light" ? "#fff" : "#001529" }}
            >
              <Switch
                checkedChildren="Night"
                unCheckedChildren="Day"
                defaultChecked={theme === "dark"}
                onChange={toggleTheme}
              />
            </Header>
            <Content>
              <div
                style={{
                  background: theme === "light" ? "#fff" : "#001529",
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Layout
                  style={{
                    background: theme === "light" ? "#fff" : "#001529",
                    color: theme === "light" ? "#000" : "#fff",
                  }}
                >
                  <div className="routes">
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <Homepage theme={theme} toggleTheme={toggleTheme} />
                        }
                      ></Route>
                      <Route path="exchanges" element={<Exchanges />}></Route>
                      <Route
                        path="cryptocurrencies"
                        element={<Cryptocurrencies />}
                      ></Route>
                      <Route
                        path="/crypto/:coinId"
                        element={<CryptoDetails />}
                      ></Route>
                      <Route path="news" element={<News />}></Route>
                    </Routes>
                  </div>
                </Layout>
                <div className="footer">
                  <Typography.Title
                    level={5}
                    style={{
                      color: theme === "light" ? "#000" : "#fff",
                    }}
                  >
                    Ovary-x
                    <br />
                    All Rights Reserved
                  </Typography.Title>
                  <Space>
                    <Link to="/">Home</Link>
                    <Link to="exchanges">Exchanges</Link>
                    <Link to="news">News</Link>
                  </Space>
                </div>
              </div>
            </Content>
          </Layout>{" "}
        </>
      </div>
    </div>
  );
};

export default App;
