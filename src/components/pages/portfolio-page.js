import React from 'react';
import './pages.css';
import {Collapsible, CollapsibleItem, Parallax} from 'react-materialize';


export default (props) => {
	return (
		<div classname='portfolio-page'>
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
			<Collapsible accordion={false}>
				<CollapsibleItem header="Better safe than sorry. That's my motto." >
					Better safe than sorry. That's my motto.
				</CollapsibleItem>
				<CollapsibleItem header="Yeah, you do seem to have a little 'shit creek' ac…" >
					Yeah, you do seem to have a little 'shit creek' action going.
				</CollapsibleItem>
				<CollapsibleItem header="You know, FYI, you can buy a paddle. Did you not p…" >
					You know, FYI, you can buy a paddle. Did you not plan for this contingency?
				</CollapsibleItem>
			</Collapsible>
			<Parallax image={<img src='img/parallax3.jpg' />} />
		</div>
	);
}