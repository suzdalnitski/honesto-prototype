import {createStore, combineReducers} from 'redux';

import {
  usersReducer,
  questionsReducer,
  answersReducer,
  feedbackReducer,
} from './ducks';

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
