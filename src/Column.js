import React, { Component } from 'react';

export default class Column extends Component {
  static __TableColumn__() {
    return true;
  }

  render() {
    return <td>Column</td>;
  }
}
