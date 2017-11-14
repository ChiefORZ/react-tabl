import { Column, Table } from '../src';
import React, { Component } from 'react';

import FakeObjectDataListStore from './helpers/FakeObjectDataListStore';

const CellData = ({ children, columnKey, data, rowIndex, ...props }) => {
  const item = data.getObjectAt(rowIndex)[columnKey];
  return children({ item, rowIndex, ...props });
};

class DataListWrapper {
  constructor(indexMap, data) {
    this.indexMap = indexMap;
    this.data = data;
  }

  getSize() {
    return this.indexMap.length;
  }

  getObjectAt(index) {
    return this.data.getObjectAt(this.indexMap[index]);
  }
}

export default class FilterExample extends Component {
  constructor(props) {
    super(props);

    this.dataList = new FakeObjectDataListStore(100);
    this.state = {
      filteredDataList: this.dataList,
    };

    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(e) {
    if (!e.target.value) {
      this.setState({
        filteredDataList: this.dataList,
      });
    }

    const filterBy = e.target.value.toLowerCase();
    const size = this.dataList.getSize();
    const filteredIndexes = [];
    for (let index = 0; index < size; index++) {
      const { firstName } = this.dataList.getObjectAt(index);
      if (firstName.toLowerCase().indexOf(filterBy) !== -1) {
        filteredIndexes.push(index);
      }
    }

    this.setState({
      filteredDataList: new DataListWrapper(filteredIndexes, this.dataList),
    });
  }

  render() {
    const { filteredDataList } = this.state;
    return (
      <div>
        <input onChange={this.onFilterChange} placeholder="Filter by First Name" />
        <br />
        <Table rowsCount={filteredDataList.getSize()}>
          <Column
            columnKey="avatar"
            header="Avatar"
            cell={<CellData data={filteredDataList}>{props => <img src={props.item} />}</CellData>}
          />
          <Column
            columnKey="firstName"
            header="First Name"
            cell={<CellData data={filteredDataList}>{props => <div>{props.item}</div>}</CellData>}
          />
          <Column
            columnKey="lastName"
            header="Last Name"
            cell={<CellData data={filteredDataList}>{props => <div>{props.item}</div>}</CellData>}
          />
          <Column
            columnKey="city"
            header="City"
            cell={<CellData data={filteredDataList}>{props => <div>{props.item}</div>}</CellData>}
          />
          <Column
            columnKey="street"
            header="Street"
            cell={<CellData data={filteredDataList}>{props => <div>{props.item}</div>}</CellData>}
          />
          <Column
            columnKey="email"
            header="Email"
            cell={<CellData data={filteredDataList}>{props => <div>{props.item}</div>}</CellData>}
          />
        </Table>
      </div>
    );
  }
}
