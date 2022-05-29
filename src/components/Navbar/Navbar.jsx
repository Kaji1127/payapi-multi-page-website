import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg';
import menuIcon from '../../assets/shared/mobile/menu.svg';
import closeIcon from '../../assets/shared/mobile/close.svg';

import './Navbar.scss';

const Navbar = () => {
	const [isShow, setIsShow] = useState(false);
	const onToggleMenu = () => {
		setIsShow(!isShow);
	};

	return (
		<nav className="navbar container">
			<div className="navbar__top">
				<h1>
					<img src={logo} alt="logo" />
				</h1>

				{isShow ? (
					<img
						className="navbar__toggle-icon"
						src={closeIcon}
						alt="close icon"
						onClick={onToggleMenu}
					/>
				) : (
					<img
						className="navbar__toggle-icon"
						src={menuIcon}
						alt="menu icon"
						onClick={onToggleMenu}
					/>
				)}
			</div>
			<ul className={`navbar__menu ${isShow && 'show'}`}>
				<div className="navbar__lists">
					<li className="navbar__list">
						<Link to="/pricing">Pricing</Link>
					</li>
					<li className="navbar__list">
						<Link to="/about">About</Link>
					</li>
					<li className="navbar__list">
						<Link to="/contact">Contact</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
