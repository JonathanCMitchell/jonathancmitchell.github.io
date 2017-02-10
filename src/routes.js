/**
 * Created by jj on 2/5/17.
 * Here we display the routes for each component and connect each component to a path.
 * These routes are imported into Index.js
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './Components/App/App'
import Home from './Components/Home/Home'
import Blog from './Components/Blog/Blog'
import Aboutme from './Components/Aboutme/Aboutme'
import Resume from './Components/Resume/Resume'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/aboutme" component = {Aboutme} />
        <Route path="/resume" component = {Resume} />
    </Route>
);

export default routes;