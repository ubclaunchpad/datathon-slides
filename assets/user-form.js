import React, {Component} from "react";
import {Heading} from 'spectacle';

export default class UserForm extends Component {
	constructor() {
		super();
		this.state = {
			fieldText: ""
		};

		this.handleChangeFieldText = this.handleChangeFieldText.bind(this);
	}

	render() {

	}

	handleChangeFieldText(e) {
		this.setState({fieldText: e.target.value});
	}
}
