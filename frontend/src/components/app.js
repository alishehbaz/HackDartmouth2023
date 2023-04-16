import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import LandingPage from './landing_page';
import PromptsPage from './prompts_page';
import StoryBoard from './storyboard';
import Stories from './stories';
import Yourcharacters from './your_characters';
import Yourprompts from './your_prompts';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/prompts" component={PromptsPage} />
          <Route path="/storyboard" component={StoryBoard} />
          <Route path="/stories" component={Stories} />
          <Route path="/yourcharacters" component={Yourcharacters} />
          <Route path="/yourprompts" component={Yourprompts} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
