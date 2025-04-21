import { Table } from "antd";
import { useCrypto } from "../crypro-context";
import { mapAssetsDtoToAssets } from "../helpers/mappers";
import { mapFilters } from "../helpers/mappers";

export default function AssetsTable() {
  const { assets } = useCrypto();

  const data = mapAssetsDtoToAssets(assets);

  const filters = mapFilters(assets);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
      filters: filters,
      onFilter: (value, record) => record.name === value,
    },

    {
      title: "Price, $",
      dataIndex: "price",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.amount - b.amount,
    },
  ];

  return (
    <div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
}
