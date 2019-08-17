import React from 'react';
import './Footer.css'
import '../../assets/SMSWhite.png'


const footer = props => (
	<header className='footer'> 
		<div>
			<div className='footerLeft'>
				<a href="/"> 
					<img src={require("../../assets/SMSWhite.png")} className='footerImage'/>
				</a>
				<p className='addressText'>
				1001 Massachusetts Ave.
				<br/>
				Cambridge
				<br/>
				MA 02138
				</p>
			</div>
			<div className='spacer'></div>
			<nav className='footerItems'>
				<ul>
					<li><a href="/">Terms of Service</a></li>
					<li><a href="/">Privacy Policy</a></li>
				</ul>
			</nav>
		</div>
	</header>

	);

export default footer;