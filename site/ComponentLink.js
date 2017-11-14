import { Link, Route } from 'react-router-dom';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

class ComponentLink extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    exact: PropTypes.bool,
    to: PropTypes.string.isRequired,
  };

  render() {
    const { children, exact, to } = this.props;
    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <li className={match && 'clean-menu--active'}>
            <Link to={to}>{children}</Link>
          </li>
        )}
      />
    );
  }
}

export default ComponentLink;
