import React from 'react';
import './pages.css';
import { Parallax } from 'react-materialize';

export default (props) => {
	return (
		<div className='home-page'>
				<div className={`section ${props.bgColor}`}>
					<div className="row container">
						<h2 className="header">
							Parallax
						</h2>
						<p className="grey-text text-darken-3 lighten-3">
							Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
						</p>
					</div>
				</div>
			<Parallax image={<img src='img/parallax2.jpg' />} />
				<div className={`section ${props.bgColor}`}>
					<div className="row container">
						<h2 className="header">
							Parallax
						</h2>
						<p className="grey-text text-darken-3 lighten-3">
							Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
						</p>
					</div>
				</div>
			<Parallax image={<img src='img/parallax1.jpg' />} />
				<div className={`section ${props.bgColor}`}>
					<div className="row container">
						<h2 className="header">
							Parallax
						</h2>
						<p className="grey-text text-darken-3 lighten-3">
							Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
						</p>
					</div>
				</div>
		</div>
	);
}