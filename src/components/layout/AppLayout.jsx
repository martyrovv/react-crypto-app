import { Layout, Spin } from "antd";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";
import { useContext } from "react";
import CryptoContext from "../../crypro-context";
import { TotalSummaryBar } from "./TotalSummaryBar";

export function AppLayout() {
  const { loading } = useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <TotalSummaryBar />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
