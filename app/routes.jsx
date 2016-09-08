import React from 'react';
import { Route } from 'react-router';

import App from 'containers/App';
import ThankYou from 'containers/ThankYou';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  return (
    <Route path="/" component={App}>
      <Route path="thank-you" component={ThankYou} />
    </Route>
  );
};
