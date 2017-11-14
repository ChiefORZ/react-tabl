import { Column, Table } from '../src';
import React, { Component } from 'react';

import FakeObjectDataListStore from './helpers/FakeObjectDataListStore';

const CellData = ({ children, columnKey, data, rowIndex, ...props }) => {
  const item = data.getObjectAt(rowIndex)[columnKey];
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
          columnKey="avatar"
          header="Avatar"
          cell={<CellData data={dataList}>{props => <img src={props.item} />}</CellData>}
        />
        <Column
          columnKey="firstName"
          header="First Name"
          cell={<CellData data={dataList}>{props => <div>{props.item}</div>}</CellData>}
        />
        <Column
          columnKey="lastName"
          header="Last Name"
          cell={<CellData data={dataList}>{props => <div>{props.item}</div>}</CellData>}
        />
        <Column
          columnKey="city"
          header="City"
          cell={<CellData data={dataList}>{props => <div>{props.item}</div>}</CellData>}
        />
        <Column
          columnKey="street"
          header="Street"
          cell={<CellData data={dataList}>{props => <div>{props.item}</div>}</CellData>}
        />
        <Column
          columnKey="email"
          header="Email"
          cell={<CellData data={dataList}>{props => <div>{props.item}</div>}</CellData>}
        />
      </Table>
    );
  }
}
