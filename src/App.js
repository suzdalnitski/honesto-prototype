import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import { LoginPage, ShareFeedbackPage, MultichoiceFeedbackPage } from './modules/pages';
import Menu from './modules/Menu';
import Footer from './modules/Footer';

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
        <Route path="/share-feedback/:userid">
          <MultichoiceFeedbackPage />
        </Route>
        <Route path="/share-feedback">
          <ShareFeedbackPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
};

const App = () => (
  <div style={style}>
    <Router>
      <Routes />
    </Router>
    <Footer />
  </div>
);

export default App;
