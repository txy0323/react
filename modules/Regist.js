var React=require('react');
var hashHistory=require('react-router').hashHistory;

var Regist=React.createClass({
	handlerSub:function(){
		
		const inputEmail11=this.refs.inputEmail1.value;
		const inputPassword11=this.refs.inputPassword1.value;
		console.log(inputEmail11)
		console.log(inputPassword11)
		$.post("http://www.txyxin.online/bookphp/insert.php", { 'inputEmail': inputEmail11, 'inputPassword': inputPassword11 },
		   function(data){
		     // hashHistory.push('/login') 
		     console.log(data)
		   });
		
	},
	render:function(){
		
		return (
			
			<div className="container">
		      <form className="form-signin">
		        <h2 className="form-signin-heading">账号注册</h2>
		        <label className="sr-only">Email address</label>
		        <input type="email" ref="inputEmail1" className="form-control" placeholder="Email address" required autofocus />
		        <label className="sr-only">Password</label>
		        <input type="password" ref="inputPassword1" className="form-control" placeholder="Password1" required/>
		        <div className="checkbox">
		          <label>
		            <input type="checkbox" value="remember-me"/> 记住密码
		          </label>
		        </div>
		        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handlerSub}>注册</button>
		      </form>
		    </div>
			)
	}
})
module.exports=Regist;