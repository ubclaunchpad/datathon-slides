import React, {Component} from "react";
import {Heading} from 'spectacle';
import request from 'superagent';

// const API_URL = 'https://ubclaunchpad.mybluemix.net/classifyrequest';
const API_URL = 'http://localhost:8000/classifyrequest';

export default class RequestClassifier extends Component {
	constructor() {
		super();
		this.state = {
			classification: null,
			fieldText: ""
		};

		this.handleChangeFieldText = this.handleChangeFieldText.bind(this);
		this.classify = this.classify.bind(this);
	}

	render() {
		const styles = {margin: 16};
		return (
			<div>
				<input
					type="text"
					value={this.state.fieldText}
					onChange={this.handleChangeFieldText}
					style={styles}
				/>
				<button onClick={this.classify} style={styles}>
					Classify
				</button>
				{
					this.state.classification &&
					<Heading size={4}>
						{this.state.classification}
					</Heading>
				}
			</div>
		);
	}

	handleChangeFieldText(e) {
		this.setState({fieldText: e.target.value});
	}

	classify() {
		request
			.post(API_URL)
			.set('Content-Type', 'application/json')
			.send({body: this.state.fieldText})
			.end((err, res) => {
				this.setState({
					classification: res.text
				});
			});
	}
}
