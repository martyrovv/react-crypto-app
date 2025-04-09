import { Layout, Select, Space, Button, Modal, Drawer } from "antd";
import { useCrypto } from "../../crypro-context";
import { useEffect, useState } from "react";
import CoinInfoModal from "../CoinInfoModal";
import AddAssetForm from "../AddAssetForm";

const headerStyle = {
  width: "100%",
  textAlign: "center",
  height: 64,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function AppHeader() {
  const { crypto } = useCrypto();
  const [select, setSelect] = useState(false);
  const [coin, setCoin] = useState(null);
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const handleSelect = (value) => {
    console.log(value);
    setModal(true);
    setCoin(crypto.find((c) => c.id === value))
  };

  useEffect(() => {
    const keypress = (event) => {
      if (event.key === "/") {
        setSelect((prev) => !prev);
      }
    };
    document.addEventListener("keypress", keypress);
    return () => document.removeEventListener("keypress", keypress);
  }, []);

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{
          width: 250,
        }}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        open={select}
        value="press / to open"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />{" "}
            {option.data.label}
          </Space>
        )}
      />
      <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
        <CoinInfoModal coin={coin}/>
      </Modal>

      <Button type="primary" onClick={()=>setDrawer(true)}>Add asset</Button>

      <Drawer width = {600} title="Add Asset" onClose={() =>setDrawer(false)} open={drawer} destroyOnClose>
        <AddAssetForm onClose = {() => setDrawer(false)}/>
      </Drawer>

    </Layout.Header>
  );
}
