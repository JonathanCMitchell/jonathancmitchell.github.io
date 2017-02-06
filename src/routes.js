/**
 * Created by jj on 2/5/17.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App'
import ListView from './ListView'
import ListViewItem from './ListViewItem'
import Home from './Home'
import Blog from './Blog'
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/listviewitem" component={ListViewItem} />
        <Route path="/blog" component={Blog} />
    </Route>
);

export default routes;