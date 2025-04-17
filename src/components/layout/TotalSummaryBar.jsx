import { Card, Col, Row, Statistic, Typography } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import CryptoContext from "../../crypro-context";
import { useContext,} from 'react';

const barStyle = {
        color: "#fff",
        backgroundColor: "#001529",
        padding: "1rem",
        width: "100%",
     
}

const cardStyle = {
    height: '100%', 
    display: 'flex',
    flexDirection: 'column'
  }

export function TotalSummaryBar() {

   

    const {assets} = useContext(CryptoContext)

    return (
        <Row style={barStyle} gutter={8}>
    <Col span={8}>
      <Card title="Total value" variant="borderless" style={cardStyle}>
        <Typography.Title level={4}>
        {assets.reduce((total, asset) => total + asset.totalAmount, 0).toFixed(2)}$
        </Typography.Title>
      </Card>
    </Col>

        <Col span={8}>
        <Card title="Total profit/loss" variant="borderless" style={cardStyle}>
        <Statistic
              value={assets.reduce((total, asset) => total + asset.totalProfit, 0).toFixed(2)}
              valueStyle={{ color: assets.grow ? "#3f8600" : "#cf1322" }}
              prefix={assets.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="$"
            />
        </Card>
      </Col>
  
    
    <Col span={8}>
      <Card title="Asset count" variant="borderless" style={cardStyle}>
      <Typography.Title level={4}>
      {assets.length}
      </Typography.Title>
      </Card>
    </Col> 
  </Row>
);
}