import React from 'react';
import MovieCard from './MovieCard';

import './styles.css';

export default class MovieList extends React.Component {
	render() {
		const moviesList = this.props.movies.map( movie =>
			<MovieCard
				key={movie.id}
				title={movie.title}
				descr={movie.descr}
				clicked={this.props.editMovie}
			/>
		);

		return(
			<div className="MovieList" >
				{moviesList}
			</div>
		);
	}
}
