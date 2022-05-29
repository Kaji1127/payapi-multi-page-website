import React from 'react';
import BgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import MockupPhone from '../../assets/home/desktop/illustration-phone-mockup.svg';
import TestImg from '../../assets/home/desktop/illustration-simple-ui.svg';
import './Home.scss';

const Home = () => {
	return (
		<section className="home">
			<img className="bg-circle" src={BgCircle} alt="" />
			<div className="home__image">
				<img src={MockupPhone} alt="Mockup phone" />
			</div>
			<div>
				<img src={TestImg} alt="" />
			</div>
			<p>text</p>
		</section>
	);
};

export default Home;
