import { Column, Table } from '../src';
import FakeMobxStore, { SortTypes } from './helpers/FakeMobxStore';
import { PropTypes, observer } from 'mobx-react';
import React, { Component } from 'react';

import ReactPropTypes from 'prop-types';

class SortHeaderCell extends Component {
  static propTypes = {
    children: ReactPropTypes.oneOfType([
      ReactPropTypes.arrayOf(ReactPropTypes.node),
      ReactPropTypes.node,
    ]),
    columnKey: ReactPropTypes.string.isRequired,
    sortDir: ReactPropTypes.any,
    store: PropTypes.observableObject.isRequired,
  };

  constructor(props) {
    super(props);
    this.onSortChange = this.onSortChange.bind(this);
  }

  onSortChange(e) {
    const { columnKey, store } = this.props;
    e.preventDefault();
    store.sort(columnKey);
  }

  render() {
    const { sortDir, children } = this.props;
    return (
      <a onClick={this.onSortChange}>
        {children} {(sortDir && (sortDir === SortTypes.DESC ? '↓' : '↑')) || ''}
      </a>
    );
  }
}

const CellData = ({ children, columnKey, data, rowIndex, ...props }) => {
  const item = data[rowIndex][columnKey];
  return children({ item, rowIndex, ...props });
};

@observer
class MobxTable extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  };

  constructor() {
    super();
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(e) {
    const { store } = this.props;
    store.filter(e.target.value);
  }

  renderColumn({ key, title }) {
    const { store } = this.props;
    return (
      <Column
        columnKey={key}
        header={
          <SortHeaderCell
            store={store}
            sortDir={store.sortingColumn === key && store.sortingDirection}
          >
            {title}
          </SortHeaderCell>
        }
        cell={<CellData data={store.sortedItems}>{props => <div>{props.item}</div>}</CellData>}
      />
    );
  }

  render() {
    const { store } = this.props;
    return (
      <div>
        <input onChange={this.onFilterChange} placeholder="Filter by First Name" />
        <br />
        <Table rowsCount={store.sortedItems.length}>
          <Column
            columnKey="avatar"
            header="Avatar"
            cell={<CellData data={store.sortedItems}>{props => <img src={props.item} />}</CellData>}
          />
          {this.renderColumn({ key: 'firstName', title: 'First Name' })}
          {this.renderColumn({ key: 'lastName', title: 'Last Name' })}
          {this.renderColumn({ key: 'city', title: 'City' })}
          {this.renderColumn({ key: 'street', title: 'Street' })}
          {this.renderColumn({ key: 'email', title: 'Email' })}
        </Table>
      </div>
    );
  }
}

class MobxExample extends Component {
  render() {
    return <MobxTable store={new FakeMobxStore(100)} />;
  }
}

export default MobxExample;
