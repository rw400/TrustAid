import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './header.css'

const Header = props => {
	return (
		<header>
			<div> { props.title } </div>
			<div className="header-links">
				<Link to="/">Charity</Link>
				<Link to="/incentives/redeem">Incentives</Link>
				<Link to="/account/info">Account</Link>
			</div>
		</header>
	)
};

export default Header;
