import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { NavHeader } from './header';
import { Content } from './content';
import { SiteFooter } from './footer';


export class App extends React.Component{
	constructor(props){
		super(props);
		this.state = { articles: [{abstract: ""}] };
	}

	componentDidMount(){
		this.loadData();
	}

	loadData() {
		const apiKey = '197e99f0d9d341f2bb7929427c45ea96';
		let url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;

		$.ajax({
			url: url,
			method: 'GET',
		}).done((data) => {
			this.setState({ articles: data.results });
			console.log(this.state.articles);

		}).fail((err) => {
			throw err;
		});
		

	}

	render(){
		return(
			<div>
				<NavHeader />
				<div className="main-container">
					<Content articles={this.state.articles}/>
				</div>
				<SiteFooter />
			</div>
		);
	}
}
