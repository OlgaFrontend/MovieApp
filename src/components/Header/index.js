import React from 'react';

import Navigation from 'components/Navigation';
import './styles.css';

export default class Header extends React.Component {
	render() {
		const linkItems =['About', 'Login']; 
		return(
			<header className="Header">
				<h1 className="Header__logo">movie app</h1>
				<ul className="Navigation">
					<Navigation links={linkItems}/>
				</ul>
			</header>
		);
	}
}
