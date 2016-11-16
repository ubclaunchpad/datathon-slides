import React, {Component} from "react";
import {Heading} from 'spectacle';

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
		this.setState({
			classification: ["WATER AND ICE", "GARBAGE", "FIRE", "POLICE"][Math.round(Math.random() * 3)]
		});
	}
}
