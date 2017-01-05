import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './Containers/App';
import Home from './Containers/Home';
import Resume from './Containers/Resume';
import Process from './Containers/Process';
const router=(
  <Router history= {browserHistory}>
        <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path="resume" component={Resume}/>
        <Route path="process" component={Process}/>
    </Route>
  </Router>
);

export default router;
