import { Column, Table } from '../src';
import React, { Component } from 'react';

import FakeObjectDataListStore from './helpers/FakeObjectDataListStore';

const CellData = ({ children, data, rowIndex, ...props }) => {
  const item = data.getObjectAt(rowIndex);
  return children({ item, rowIndex, ...props });
};

export default class DefaultExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: new FakeObjectDataListStore(100),
    };
  }

  render() {
    const { dataList } = this.state;
    return (
      <Table rowsCount={dataList.getSize()}>
        <Column
          header="Avatar"
          cell={<CellData data={dataList}>{props => <img src={props.item.avatar} />}</CellData>}
        />
        <Column
          header="First Name"
          cell={<CellData data={dataList}>{props => <div>{props.item.firstName}</div>}</CellData>}
        />
        <Column
          header="Last Name"
          cell={<CellData data={dataList}>{props => <div>{props.item.lastName}</div>}</CellData>}
        />
        <Column
          header="City"
          cell={<CellData data={dataList}>{props => <div>{props.item.city}</div>}</CellData>}
        />
        <Column
          header="Street"
          cell={<CellData data={dataList}>{props => <div>{props.item.street}</div>}</CellData>}
        />
        <Column
          header="Email"
          cell={<CellData data={dataList}>{props => <div>{props.item.email}</div>}</CellData>}
        />
      </Table>
    );
  }
}
