import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import Loader from "./Loader";
import News from "./News";

const { Title } = Typography;

const Homepage = ({ theme, toggleTheme }) => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  const textColor = theme === "light" ? "#000" : "#fff";

  return (
    <div>
      <Title level={2} className="heading" style={{ color: textColor }}>
        Global Crypto Stats
      </Title>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            titleStyle={{ color: textColor }}
            value={globalStats.total}
            valueStyle={{ color: textColor }} // Styling value text color
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            titleStyle={{ color: textColor }}
            value={millify(globalStats.totalExchanges)}
            valueStyle={{ color: textColor }} // Styling value text color
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            titleStyle={{ color: textColor }}
            value={millify(globalStats.totalMarketCap)}
            valueStyle={{ color: textColor }} // Styling value text color
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            titleStyle={{ color: textColor }}
            value={millify(globalStats.total24hVolume)}
            valueStyle={{ color: textColor }} // Styling value text color
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market"
            titleStyle={{ color: textColor }}
            value={millify(globalStats.totalMarkets)}
            valueStyle={{ color: textColor }} // Styling value text color
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title" style={{ color: textColor }}>
          Top 10 Cryptocurrencies in the world
        </Title>
      </div>

      <Cryptocurrencies />
      <div className="home-heading-container">
        <Title level={2} className="home-title" style={{ color: textColor }}>
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news" style={{ color: textColor }}>
            Show more
          </Link>
        </Title>
      </div>
      <News />
    </div>
  );
};

export default Homepage;
