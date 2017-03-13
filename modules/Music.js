var React = require('react');
var NavLink = require('./NavLink');

var Music = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},
	getInitialState:function(){
		return {
			list:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({url:this.props.url}).then(function(res){
			_this.setState({
				list: res.musics
			})
		})
	},
	render:function(){
		if(this.state.list.length>0){
			var lst = [];
			var data = this.state.list;
			var listLen = data.length;
			for(var i = 0;i<listLen;i++){
				var detailUrl = "/detail/" + data[i].id;
				lst.push(
					<div className="col-lg-4 text-center one" key={i}>
			        	<img className="text-center" 
			          		src={data[i].images.large}
			          		alt="Generic placeholder image" width="120" height="160"/>
			        	<h2 className="booksTitle">{data[i].title}</h2>
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

module.exports = Music;