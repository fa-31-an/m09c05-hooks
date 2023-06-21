import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { BrowserRouter as Router } from 'react-router-dom/';
import { AppRoutes } from './routes';
function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <Router>
          <SideBar />
          <AppRoutes>
            <ContentWrapper />
          </AppRoutes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
