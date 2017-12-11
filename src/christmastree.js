// src/christmastree.js

import React from 'react';
import ReacDOM from 'react-dom';

import Flake from './components/Flake';

window.onload = () => {
	ReactDOM.render(<Flake/>,
	document.getElementByID('main'));
};