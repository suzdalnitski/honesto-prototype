import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { Provider } from 'react-redux'

import {
  LoginPage,
  ShareFeedbackPage,
  SubmitFeedbackPage,
  ViewFeedbackPage,
} from 'modules/pages';
import { Menu, Footer } from 'modules/layout';
import setupStore from 'modules/store';

const style = {
  width: '100vw',
  minHeight: '100vh',
};

const shouldShowMenu = ({location}) => location.pathname !== '/';

const Routes = () => {
  const location = useLocation();
  return (
    <>
      {shouldShowMenu({location}) && <Menu />}
      <Switch>
        <Route path="/share-feedback">
          <ShareFeedbackPage />
        </Route>
        <Route path="/submit-feedback/:userid">
          <SubmitFeedbackPage />
        </Route>
        <Route path="/view-feedback/">
          <ViewFeedbackPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
};

const store = setupStore();

const App = () => (
  <Provider store={store}>
    <div style={style}>
      <Router>
        <Routes />
      </Router>
      <Footer />
    </div>
  </Provider>
);

export default App;
