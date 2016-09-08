import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import button from 'reducers/button';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  routing,
  button,
});

export default rootReducer;
