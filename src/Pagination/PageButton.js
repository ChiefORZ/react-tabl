import React, { Component } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

class PageButton extends Component {
  pageBtnClick = e => {
    e.preventDefault();
    if (!this.props.disabled) {
      this.props.changePage(e.currentTarget.textContent);
    }
  };

  render() {
    const classes = cx('page-item', {
      active: this.props.active,
      disabled: this.props.disabled,
      hidden: this.props.hidden,
    });
    return (
      <li className={classes} title={this.props.title}>
        <a href="#" onClick={this.pageBtnClick} className="page-link">
          {this.props.children}
        </a>
      </li>
    );
  }
}

PageButton.propTypes = {
  title: PropTypes.string,
  changePage: PropTypes.func,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  children: PropTypes.node,
};

export default PageButton;
