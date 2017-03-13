var React=require('react');
var NavLink = require('./NavLink');

var hashHistory=require('react-router').hashHistory;

var Login = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://www.txyxin.online/bookphp/select.php'
		}
	},
	getInitialState:function(){
		return{
			list:[]
		}
	},
	componentWillMount:function(){
		var _this=this;
		$.ajax({url:this.props.url}).then(function(res){
			var res=JSON.parse(res);
			_this.setState({
				list:res

			})

		})
	},
	handlerClick:function(){
		var data=this.state.list
		const inputE=this.refs.inputEmail.value;
		const inputP=this.refs.inputPassword.value;
		for (var i = 0; i < data.length; i++) {
			console.log(data[i])
			if(inputE === data[i].inputEmail && inputP === data[i].inputPassword){
				localStorage.t1=data[i].inputEmail;
				var homeUrl=''
				 hashHistory.push(homeUrl);
				 console.log("aa");
			}
		}
	},
	render:function(){
		
		
		return (
			
			<div className="container">
		      <form className="form-signin" onClick={this.handlerSubmit}>
		        <h2 className="form-signin-heading">账号登录</h2>
		        <label className="sr-only">Email address</label>
		        <input type="email" ref="inputEmail" className="form-control" placeholder="Email address" required autofocus />
		        <label className="sr-only">Password</label>
		        <input type="password" ref="inputPassword" className="form-control" placeholder="Password" required/>
		        <div className="checkbox">
		          <label>
		            <input type="checkbox" value="remember-me"/> 记住密码
		          </label>
		        </div>
		        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handlerClick}>登录</button>
		      </form>
		      
		    </div>
			)
	}
});
module.exports = Login;