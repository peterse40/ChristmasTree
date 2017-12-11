import React from "react";
import { Link } from "react-router";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Merry Christmas!";
		};
	}

	changeTitle(title) {
		this.setState({title});
	}

	render() {
		return (
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
				<Footer />
			</div>
		);
	}
}