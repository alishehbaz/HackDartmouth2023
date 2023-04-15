import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import LandingPage from './landing_page';
import Nav from './navbar';
import PromptsPage from './prompts_page';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={Nav} />
          <Route path="/prompts" component={PromptsPage} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
