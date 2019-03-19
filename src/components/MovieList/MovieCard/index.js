import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class MovieCard extends React.Component {

	render() {
		const { id, title, descr, clicked } = this.props;

		return(
			<div className = "MovieCard" onClick={() => clicked(id)}>
		        <div className = "MovieInfo">
					<h2 className="MovieInfo__title">{title}</h2>
			        <p className="MovieInfo__descr">{descr}</p>
			    </div>
		    </div>
		);
	}
}

MovieCard.propTypes = {
	title: PropTypes.string,
	descr: PropTypes.string,
}
