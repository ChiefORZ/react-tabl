/* eslint-disable react/no-multi-comp */

import { Column, Table } from '../src';
import React, { Component } from 'react';

import FakeObjectDataListStore from './helpers/FakeObjectDataListStore';

const SortTypes = {
  ASC: 'ASC',
  DESC: 'DESC',
};

function reverseSortDirection(sortDir) {
  return sortDir === SortTypes.DESC ? SortTypes.ASC : SortTypes.DESC;
}

class SortHeaderCell extends Component {
  constructor(props) {
    super(props);

    this.onSortChange = this.onSortChange.bind(this);
  }

  onSortChange(e) {
    e.preventDefault();

    if (this.props.onSortChange) {
      this.props.onSortChange(
        this.props.columnKey,
        this.props.sortDir ? reverseSortDirection(this.props.sortDir) : SortTypes.DESC
      );
    }
  }

  render() {
    const { onSortChange, sortDir, children, ...props } = this.props;
    return (
      <a onClick={this.onSortChange}>
        {children} {sortDir ? (sortDir === SortTypes.DESC ? '↓' : '↑') : ''}
      </a>
    );
  }
}

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

export default class SortExample extends Component {
  constructor(props) {
    super(props);

    this.dataList = new FakeObjectDataListStore(100);
    this.defaultSortIndexes = [];
    const size = this.dataList.getSize();
    for (let index = 0; index < size; index++) {
      this.defaultSortIndexes.push(index);
    }

    this.state = {
      sortedDataList: this.dataList,
      colSortDirs: {},
    };

    this.onSortChange = this.onSortChange.bind(this);
  }

  onSortChange(columnKey, sortDir) {
    const sortIndexes = this.defaultSortIndexes.slice();
    sortIndexes.sort((indexA, indexB) => {
      const valueA = this.dataList.getObjectAt(indexA)[columnKey];
      const valueB = this.dataList.getObjectAt(indexB)[columnKey];
      let sortVal = 0;
      if (valueA > valueB) {
        sortVal = 1;
      }
      if (valueA < valueB) {
        sortVal = -1;
      }
      if (sortVal !== 0 && sortDir === SortTypes.ASC) {
        sortVal *= -1;
      }

      return sortVal;
    });

    this.setState({
      sortedDataList: new DataListWrapper(sortIndexes, this.dataList),
      colSortDirs: {
        [columnKey]: sortDir,
      },
    });
  }

  render() {
    const { sortedDataList, colSortDirs } = this.state;
    return (
      <Table rowsCount={sortedDataList.getSize()}>
        <Column
          columnKey="avatar"
          header="Avatar"
          cell={<CellData data={sortedDataList}>{props => <img src={props.item} />}</CellData>}
        />
        <Column
          columnKey="firstName"
          header={
            <SortHeaderCell onSortChange={this.onSortChange} sortDir={colSortDirs.firstName}>
              First Name
            </SortHeaderCell>
          }
          cell={<CellData data={sortedDataList}>{props => <div>{props.item}</div>}</CellData>}
        />
        <Column
          columnKey="lastName"
          header={
            <SortHeaderCell onSortChange={this.onSortChange} sortDir={colSortDirs.lastName}>
              Last Name
            </SortHeaderCell>
          }
          cell={<CellData data={sortedDataList}>{props => <div>{props.item}</div>}</CellData>}
        />
        <Column
          columnKey="city"
          header={
            <SortHeaderCell onSortChange={this.onSortChange} sortDir={colSortDirs.city}>
              City
            </SortHeaderCell>
          }
          cell={<CellData data={sortedDataList}>{props => <div>{props.item}</div>}</CellData>}
        />
        <Column
          columnKey="street"
          header={
            <SortHeaderCell onSortChange={this.onSortChange} sortDir={colSortDirs.street}>
              Street
            </SortHeaderCell>
          }
          cell={<CellData data={sortedDataList}>{props => <div>{props.item}</div>}</CellData>}
        />
        <Column
          columnKey="email"
          header={
            <SortHeaderCell onSortChange={this.onSortChange} sortDir={colSortDirs.email}>
              Email
            </SortHeaderCell>
          }
          cell={<CellData data={sortedDataList}>{props => <div>{props.item}</div>}</CellData>}
        />
      </Table>
    );
  }
}
