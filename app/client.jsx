import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createRoutes from 'routes';
import configureStore from 'store/configureStore';
import preRenderMiddleware from 'middlewares/preRenderMiddleware';

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

/**
 * Callback function handling frontend route changes.
 * Prevent duplicate fetches when first loaded.
 */
function onUpdate() {
  if (window.__INITIAL_STATE__ !== null) {
    window.__INITIAL_STATE__ = null;
    return;
  }

  const { components, params } = this.state;

  preRenderMiddleware(store.dispatch, components, params);
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} onUpdate={onUpdate}>
      {routes}
    </Router>
  </Provider>, document.getElementById('app'));
