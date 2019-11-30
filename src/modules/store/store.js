import {createStore, combineReducers} from 'redux';

import {reducer as usersReducer} from './users';

const setupStore = () => {
  const reducers = combineReducers({
    users: usersReducer,
  });

  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};

export default setupStore;
