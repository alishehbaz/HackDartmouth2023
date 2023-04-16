import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import LandingPage from './landing_page';
import PromptsPage from './prompts_page';

const FallBack = () => {
  return <div>URL Not Found</div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/prompts" component={PromptsPage} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
