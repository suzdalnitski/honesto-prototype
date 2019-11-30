import {createStore, combineReducers} from 'redux';

import {reducer as usersReducer} from './users';
import {reducer as questionsReducer} from './questions';
import {reducer as answersReducer} from './answers';
import {reducer as feedbackReducer} from './feedback';

const setupStore = () => {
  const reducers = combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    answers: answersReducer,
    feedback: feedbackReducer,
  });

  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};

export default setupStore;
