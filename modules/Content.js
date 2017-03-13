var React = require('react');
var NavLink = require('./NavLink');


// 评论框组件
var Content = React.createClass({
    getInitialState: function () {
        return {
            rtitle: "初始化标题" //评论标题
        };
    },

    textChange:function (event) {
        this.setState({rtitle: event.target.value});
    },

    submit: function () {
        alert(this.state.rtitle)
    },

    render: function () {
        return <dl className="reviewbox">
                <dt>发表评论</dt>
                <dd><input type="text" value={this.state.rtitle} onChange={this.textChange} /></dd>
                <dd><textarea></textarea></dd>
                <dd><input type="button" value="提交" onClick={this.submit} /></dd>
            </dl>
    }
});


module.exports = Content;