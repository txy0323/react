var React = require('react');
var NavLink = require('./NavLink');

var Home = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},
	getInitialState:function(){
		return {
			listbooks:[],
			listmovie:[],
			listmusic:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({url:this.props.url}).then(function(res){
			_this.setState({
				listbooks: res.books,
				listmovie: res.subjects,
				listmusic: res.musics
			})
		})
	},
	render:function(){
		if(this.state.listbooks.length>0){
			var _books = this.state.listbooks;
			var lst = [];
			var listLen = _books.length;
			for(var i = 0;i<listLen;i++){
				var detailUrl = "/detail/" + _books[i].id;
			
				lst.push(
					<div className="col-lg-4 text-center one" key={i}>
			          <img className="img-circle text-center" 
			          src={_books[i].images.medium}
			          alt="Generic placeholder image" width="150" height="150"/>
			          <h2 className="booksTitle">{_books[i].title}</h2>
			          <p className="booksSummary">{_books[i].author}{_books[i].price}</p>
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">
			         	查看详细信息>></NavLink></p>
			        </div>
				)
			}
		}
		return (
			<div className="container marketing">
		      <div className="row">
		        {lst}
		      </div>
			</div>
		)
	}
});

module.exports = Home;