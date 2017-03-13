var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;


var App = require('./modules/App');
var Home = require('./modules/Home');
var Detail = require('./modules/Detail');
var Movie = require('./modules/Movie');
var Music = require('./modules/Music');
var Book = require('./modules/Book');
var Content = require('./modules/Content');
var Login = require('./modules/Login');
var Regist = require('./modules/Regist');


var Index = React.createClass({
	render:function(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="/detail/:id" component={Detail} />
					<Route path="/movie" component={Movie} />
					<Route path="/music" component={Music} />
					<Route path="/book" component={Book} />
					<Route path="/content" component={Content} />
					<Route path="/login" component={Login} />
					<Route path="/regist" component={Regist} />
				</Route>
			</Router>
		)
	}
})

ReactDOM.render(<Index/>,document.getElementById('app'));