import React from 'react';
import ReactDOM from 'react-dom';


const Article = (props) => {

	let copyright = (props.copyright) ? <span className="copyright-text">&copy; {props.copyright}</span> : '';
	let caption = (props.caption) ? <span className="caption-text">&#8220;{props.caption}&#8221;</span> : '';

	return(
		<div className="top-story">
			<h3>{props.title}</h3>
			<div className="img-container">
				<img src={props.imgUrl} alt="image" />
				{copyright}
			</div>
			{caption}
			<p>{props.abstract}</p>
			<hr/>
		</div>
	);
}


export const Content = (props) => {
	let i = 0,
	imageUrl = "",
	caption = "",
	copyright = "",
	multimediaLastIndex = {};

	const articles = props.articles.map((article) => {

		if(article.multimedia){
			if(article.multimedia.length > 0){
				multimediaLastIndex = article.multimedia[(article.multimedia.length - 1)];
				imageUrl = (multimediaLastIndex.url) ? multimediaLastIndex.url : "No Image";
				caption = (multimediaLastIndex.caption) ? multimediaLastIndex.caption : null;
				copyright = (multimediaLastIndex.copyright) ? multimediaLastIndex.copyright : null;

				return( 
					<Article key={++i}  abstract={article.abstract}
									title={article.title}
									imgUrl={imageUrl}
									caption={caption}
									copyright={copyright}
					/>
				);
			}
		}
	});

	return (
		<div>
			{articles}
		</div>
	);

}


