var React = require('react');
var Detail = React.createClass({
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
				list: res
			})
		});
	},
	render:function(){
		if(this.state.list.length!=0){
			var lst = [];
			var musicsid = this.props.params.id;
			var data = this.state.list;

			for(var i in data){
				var pro = data[i];
				var index = i;
				var proLength = pro.length;
				for(var j = 0; j < proLength; j++){
					var detailUrl = pro[j].id;
					if(detailUrl === musicsid){
						if(index === "books"){
							console.log(pro[j]);
							lst.push(
								<div key={j}>
									<div className="detailflex" key={j}>
										<img className="img-rounded" src={pro[j].images.large}/>
										<div className="right">
											<h2 className="detailtitle">{pro[j].title}</h2>
											<p className="publisher">出版社：{pro[j].publisher}</p>
											<p className="text-primary">本书摘要：{pro[j].summary}</p>
											<a className="url" href={pro[j].url}>阅读</a>
										</div>
									</div>
									<div>
								        <textarea className="form-control" rows="10" placeholder="评论。。。"></textarea>
								        <button type="button" className="btn btn-primary btn-lg">发表评论</button>
								    </div>
							    </div>
							)
						}else if(index === "subjects"){
							var casts = pro[j].casts;
							lst.push(
								<div key={j}>
									<div className="detailflex">
										<img className="img-rounded" src={pro[j].images.large}/>
										<div className="right">
											<h2 className="detailtitle">{pro[j].title}</h2>
											<p className="year">年份：{pro[j].year}年</p>
											<p className="actor">主演：{pro[j].casts[0].name}</p>
											<p className="average">评分：{pro[j].rating.average}</p>
											<p className="summary">简介：{pro[j].summary}</p>
										</div>
									</div>
									<div>
								        <textarea className="form-control" rows="10" placeholder="评论。。。"></textarea>
								        <button type="button" className="btn btn-primary btn-lg">发表评论</button>
								    </div>
							    </div>
							)
						}else{
							console.log(pro[j]);
							lst.push(
								<div key={j}>
									<div className="detailflex">
										<img className="imgmusic" src={pro[j].images.large}/>
										<div className="right">
											<h2 className="detailtitle">{pro[j].title}</h2>
											<p className="author">歌手：{pro[j].author[0].name}</p>
										</div>
									</div>
									<div>
								        <textarea className="form-control" rows="10" placeholder="评论。。。"></textarea>
								        <button type="button" className="btn btn-primary btn-lg">发表评论</button>
								    </div>
							    </div>
							)
						}									
					}
				}
			}			
		}
		return (
			<div>
				{lst}
			</div>
		)
	}
});

module.exports = Detail;