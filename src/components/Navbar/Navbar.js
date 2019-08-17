import React from 'react';
import './Navbar.css'

const navbar = props => (
	<header className='navbar'> 
		<nav className='navbarNavigation'>
			<div className='navbarLogo'>
				<a href="/"> 
					<img src={require("../../assets/SMSDashboard.png")} className='navbarImage'/>
				</a>
			</div>
			<div className='spacer'></div>
			<div className='navbarItems'>
				<ul>
					<li><a href="/">Sign In</a></li>
				</ul>
			</div>
		</nav>
	</header>

	);

export default navbar;