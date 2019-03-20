import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MovieCard = ({ idElem, title, descr, clicked }) => {
	return(
		<div className = "MovieCard" onClick={() => clicked(idElem)}>
			<div className = "MovieInfo">
				<h2 className="MovieInfo__title">{title}</h2>
				<p className="MovieInfo__descr">{descr}</p>
			</div>
		</div>
	);
}

MovieCard.propTypes = {
	title: PropTypes.string.isRequired,
	descr: PropTypes.string.isRequired,
	idElem: PropTypes.string.isRequired,
	clicked: PropTypes.func.isRequired,
}

export default MovieCard;
