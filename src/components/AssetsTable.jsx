import { Table } from 'antd';
import { useCrypto } from '../crypro-context';


 export default function AssetsTable() {

  const { assets} = useCrypto()

  const data = assets.map((a) => ({
    key: a.id,
    name: a.name,
    price: a.price,
    amount: a.amount,
}))

const filterByName = assets.map((n) => ({
  text: n.name,
  value: n.name
}))

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
      filters: filterByName,
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },

    {
      title: 'Price, $',
      dataIndex: 'price',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.amount - b.amount,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


    return(<div>
        <Table
    pagination = {false}
    columns={columns}
    dataSource={data}
    onChange={onChange}
  />
    </div>)
 }