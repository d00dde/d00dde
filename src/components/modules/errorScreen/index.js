import React from 'react';
import './errorScreen.css';

export default (props) => (
<div className='error-message'>
	{props.message}
</div>
);