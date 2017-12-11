import React from 'react';
import ReactDOM from 'react-dom';

import Bootstrap from "./vendor/bootstrap-without-jquery";

import Layout from "./components/Layout";
import Flake from "./components/Flake";
import Tree from "./components/Tree";
import Footer from "./components/Footer";
import Header from "./components/Header";


const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Flake}>
			<Route path="Flake" component={Flake}></Route>
			<Route path="Tree" component={Tree}></Route>
		</Route>
	</Router>,
	app);

ReactDOM.render(<Flake/>, app);
ReactDOM.render(<Tree/>, app);