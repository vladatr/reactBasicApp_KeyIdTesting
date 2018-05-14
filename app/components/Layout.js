import React from 'react';
import BigNews from './BigNews';
import SmallNews from './SmallNews';


class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			news: [], 
			counter: 0
		}
	}

	addNews = () => {
		const title = prompt("Insert news article title");
		const newArticle = {id: this.state.counter + 1, title}
		this.setState({news: [newArticle, ...this.state.news], counter: this.state.counter + 1 });
	}
	
	render() {
		console.log("render Layout. NUmber of news " + this.state.news.length);
	/* Key scenario - fixed key
		let key=0;
		if(this.state.news[0] ) {
			key = this.state.news[0].id > 2 ? 2 : this.state.news[0].id;
		}
		*/
		const glavnaVest =  this.state.counter>0 ? <BigNews  key={key}  article={this.state.news[0]} /> : "";
		let  ostaleVesti =  [];
		if(this.state.counter>1) {
			ostaleVesti = this.state.news.map(article => {
				if(article.id != this.state.news[0].id) return <SmallNews key={ article.id} article={article} />
			});
		}
		return(
			<div>
				<h2>Layout</h2>
				{glavnaVest}
				{ostaleVesti}
				<button onClick={this.addNews}>Add news</button>
			</div>
		)
	}
}

export default Layout;