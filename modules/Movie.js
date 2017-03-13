var React = require('react');
var NavLink = require('./NavLink');

var Movie = React.createClass({
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
				list: res.subjects
			})
		})
	},
	handerClick:function(){
		var inputValue = this.refs.inputbox.value;
		this.setState({
			inputValue:inputValue
		})
	},
	render:function(){
		if(this.state.list.length>0){
			var lst = [];
			var data = this.state.list;
			var listLen = data.length;
			console.log(this.state.inputValue);
			if(this.state.inputValue){
				var inputValue = this.state.inputValue;
				console.log(inputValue);
			for(var i = 0;i<listLen;i++){
				if(data[i].title.indexOf(inputValue)!=-1 || data[i].year.indexOf(inputValue)!=-1){
				var detailUrl = "/detail/" + data[i].id;
				var actors = "";
				for(var j=0;j<data[i].casts.length;j++){
					actors += "" + data[i].casts[j].name + ""
				};
				lst.push(
					<div className="col-lg-4 text-center one" key={i}>
			        	<img className="text-center" 
			          		src={data[i].images.medium}
			          		alt="Generic placeholder image" width="120" height="160"/>
			        	<h2 className="booksTitle">{data[i].title}</h2>
			        	<p>
			         		<NavLink to={detailUrl} className="btn btn-default" role="button">
			         	查看详细信息>></NavLink></p>
			        </div>
				)
			}else{
				lst[0]="没有结果";
			}
		}
	}else{
		for(var i = 0;i<listLen;i++){
			var detailUrl = "/detail/" + data[i].id;
			var actors = "";
			for(var j=0;j<data[i].casts.length;j++){
				actors += "" + data[i].casts[j].name + ""
			};

			lst.push(
					<div className="col-lg-4 text-center one" key={i}>
			        	<img className="text-center" 
			          		src={data[i].images.medium}
			          		alt="Generic placeholder image" width="120" height="160"/>
			        	<h2 className="booksTitle">{data[i].title}</h2>
			        	<p>
			         		<NavLink to={detailUrl} className="btn btn-default" role="button">
			         	查看详细信息>></NavLink></p>
			        </div>
				)
			}
		}
	};
		return (
			<div className="container marketing">
				<div id="search">
					<input type="text" ref="inputbox" placeholder="输入搜索内容"/>
					<input type="submit" ref="button" value="搜索" onClick={this.handerClick}/>
				</div>
		      <div className="row">
		        {lst}
		      </div>
			</div>
		)
	}
});

module.exports = Movie;