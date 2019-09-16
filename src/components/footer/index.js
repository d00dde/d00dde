import React from 'react';
import './footer.css';

import { Footer } from 'react-materialize';

export default (props) => {
	return(
		<Footer
		  copyrights="&copy 2015 Copyright Text"
		  moreLinks={<a />}
		  links={<ul />}
		  className={props.bgColor}
		>
			<h5 className="white-text">
				Footer Content
			</h5>
			<p className="grey-text text-lighten-4">
				You can use rows and columns here to organize your footer content.
			</p>
		</Footer>
	)
}