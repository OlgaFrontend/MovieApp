import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import './styles.css';

const MovieList = ({ movies, editMovie }) => {
	return(
		<div className="MovieList" >
			{
				movies.map(movie =>
					<MovieCard
						idElem={movie.id}
						key={movie.id}
						title={movie.title}
						descr={movie.descr}
						clicked={editMovie}
					/>
				)
			}
		</div>
	);
}

MovieList.propTypes = {
  movies:PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		descr: PropTypes.string.isRequired,
	})).isRequired,
}

export default MovieList;
