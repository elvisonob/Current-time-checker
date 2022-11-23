import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import London from './pages/London';
import Home from './pages/Home';
import Paris from './pages/Paris';
import Rome from './pages/Rome';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/london">
            <London />
          </Route>
          <Route path="/paris">
            <Paris />
          </Route>
          <Route path="/rome">
            <Rome />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
