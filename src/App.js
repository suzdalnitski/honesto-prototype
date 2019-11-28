import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginPage from './modules/LoginPage'
import ShareFeedbackPage from './modules/ShareFeedbackPage'
import Menu from './modules/Menu'
import Footer from './modules/Footer'

const style = {
  width: "100vw",
  minHeight: "100vh"
}

const App = () => (
  <div style={style}>
    <Menu />
    <ShareFeedbackPage />
    {/* <LoginPage /> */}
    <Footer />
  </div>
);

export default App;
