***REMOVED***
 * Created by YouHan on 2016/8/22.
***REMOVED***
"use strict";

var React = require('react');
var Render = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var hashHistory = router.hashHistory;
var Route = router.Route;
var IndexRoute = router.IndexRoute;

var Header = require('./header');
var Dashboard = require('./dashboard');
var Story = require('./story');
var Bug = require('./bug');
var Config = require('./config');
var Report = require('./report');

var App = React.createClass({
    render: function () {
        return (
            <div style={{
                height: '100%'
            }}>
                <Header></Header>
                {this.props.children}
            </div>
        )
    }
***REMOVED***


Render.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path="story" component={Story}/>
            <Route path="bug" component={Bug}>
                {/*<IndexRoute component={InboxStats}/>*/}
                {/*<Route path="messages/:id" component={Message}/>*/}
            </Route>
            <Route path="config" component={Config}/>
            <Route path="report" component={Report}/>
        </Route>
    </Router>
    , document.getElementById('root'));