import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Navigation = ({ links }) => {
	return(
		links.map(link =>
			<li key={link} className="Navigation__item">
				<a href={`/${link}`} className="Navigation__link">
					{link}
				</a>
			</li>)
	);
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
}

export default Navigation;
