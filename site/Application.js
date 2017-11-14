import { HashRouter, Route } from 'react-router-dom';
import React, { PureComponent } from 'react';

import ComponentLink from './ComponentLink';
import DefaultExample from '../examples/DefaultExample';
import FilterExample from '../examples/FilterExample';
import MobxExample from '../examples/MobxExample';
import PaginationExample from '../examples/PaginationExample';
import { Redirect } from 'react-router';
import SortExample from '../examples/SortExample';

const EXAMPLES_MAP = {
  '/examples/Default': DefaultExample,
  '/examples/Pagination': PaginationExample,
  '/examples/Sort': SortExample,
  '/examples/Filter': FilterExample,
  '/examples/Mobx': MobxExample,
};

export default class Application extends PureComponent {
  render() {
    return (
      <HashRouter>
        <div className="wrapper">
          <div
            className="clean-menu clean-menu--horizontal bg-white"
            style={{
              position: 'fixed',
              zIndex: 999,
              width: '100%',
            }}
          >
            <ul className="clean-menu-nav">
              <ComponentLink to="/examples/Default">Default</ComponentLink>
              <ComponentLink to="/examples/Pagination">Pagination</ComponentLink>
              <ComponentLink to="/examples/Sort">Sort</ComponentLink>
              <ComponentLink to="/examples/Filter">Filter</ComponentLink>
              <ComponentLink to="/examples/Mobx">Mobx</ComponentLink>
            </ul>
          </div>
          <div className="container" style={{ paddingTop: '4em' }}>
            {Object.keys(EXAMPLES_MAP).map(route => {
              return <Route key={route} path={route} component={EXAMPLES_MAP[route]} />;
            })}
          </div>
          <Route exact path="/" render={() => <Redirect to="/examples/Default" />} />
        </div>
      </HashRouter>
    );
  }
}
