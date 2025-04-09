import { Layout, Typography } from "antd";
import { useCrypto } from "../../crypro-context";
import AssetsTable from '../AssetsTable';
import PortfolioChart from '../PortfolioChart';

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 64px)",
  color: "#fff",
  backgroundColor: "#001529",
  padding: "1rem",
};

export default function AppContent() {
  const { assets, crypto } = useCrypto();

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ textAlign: "left", color: "#fff" }}>
        Portfolio:{" "}
        {assets
          .map((asset) => {
            const coin = crypto.find((c) => c.id === asset.id);
            return asset.amount * coin.price;
          })
          .reduce((acc, v) => (acc += v), 0)
          .toFixed(2)}
        $
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
}
//2.31.17 - графики
