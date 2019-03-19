import React from 'react';
import MovieCard from './MovieCard';

import './styles.css';

export default class MovieList extends React.Component {
	render() {
		return(
			<div className="MovieList" >
				{
					this.props.movies.map(movie =>
						<MovieCard
							idElem={movie.id}
							key={movie.id}
							title={movie.title}
							descr={movie.descr}
							clicked={this.props.editMovie}
						/>
					)
				}
			</div>
		);
	}
}
