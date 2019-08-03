import React from 'react';
import { Table, Button } from 'semantic-ui-react';

const coinValues = [
  {
    name: 'Bitcoin',
    abb: 'BTC',
    price: 'NGN 3,484,4040.49',
    change: 5.01,
    changeSign: '+',
    chart: '-----',
    imageBg: '#f7931a'
  },
  {
    name: 'Ethereum',
    abb: 'ETH',
    price: 'NGN 3,484,4040.49',
    change: 3.04,
    changeSign: '+',
    chart: '-----',
    imageBg: '#627eea'
  },
  {
    name: 'Litecoin',
    abb: 'LTC',
    price: 'NGN 3,484,4040.49',
    change: 1.01,
    changeSign: '-',
    chart: '-----',
    imageBg: '#a5a8a9'
  },
  {
    name: 'Bitcoin Cash',
    abb: 'BCH',
    price: 'NGN 3,484,4040.49',
    changeSign: '+',
    change: 5.01,
    chart: '-----',
    imageBg: '#8dc351'
  }
];

export default function CoinValueTable() {
  const tableBody = coinValues.map((coin, idx) => (
    <Table.Row>
      <Table.Cell style={{ color: '#ccc' }}>{idx + 1}</Table.Cell>
      <Table.Cell
        width={7}
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center'
        }}
      >
        <span
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: coin.imageBg,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '25px',
            fontWeight: 'bold',
            marginRight: '20px'
          }}
        >
          {coin.name[0]}
        </span>
        <span>
          {coin.name}
          <span style={{ opacity: 0.3, marginLeft: '20px' }}>{coin.abb}</span>
        </span>
      </Table.Cell>
      <Table.Cell>{coin.price}</Table.Cell>
      <Table.Cell
        style={{ color: coin.changeSign === '+' ? '#05b169' : '#df5f67' }}
      >
        {coin.changeSign}
        {coin.change}
      </Table.Cell>
      <Table.Cell>{coin.chart}</Table.Cell>
      <Table.Cell>
        <Button
          style={{
            color: 'white !important',
            background: '#05b169 !important'
          }}
        >
          Buy
        </Button>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #f2f2f2',
        borderRadius: '5px',
        minHeight: '350px',
        marginBottom: '50px'
      }}
    >
      <Table basic='very' className='table'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Change</Table.HeaderCell>
            <Table.HeaderCell>Chart</Table.HeaderCell>
            <Table.HeaderCell>Trade</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{tableBody}</Table.Body>
      </Table>
    </div>
  );
}
