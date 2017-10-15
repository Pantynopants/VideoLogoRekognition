// @flow

import React from 'react';
import { render } from 'react-dom';
import Index from './pages/index';
import GuttersGrid from './pages/grid';
import ResponsiveDrawer from './pages/drawer';
import AutoGrid from './pages/autoGrid';
// import { Router, Route, Link } from 'react-router'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { IndexRoute } from 'react-router'
import Video from './pages/video';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const BasicExample = () => (
    <Router>
        <div>
            
            <Route exact path="/" component={ResponsiveDrawer} />
            <Route path="/video" component={Video} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
        </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

render(<BasicExample />, document.querySelector('#root'));


// render(<ResponsiveDrawer />, document.querySelector('#root'));
// render(<Index />, document.querySelector('#root'));