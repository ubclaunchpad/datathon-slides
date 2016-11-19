import React, {Component} from "react";

const AGENCIES = ['ANIMAL CONTROL', 'BUILDING INQUIRIES', 'GARDEN BED', 'GRAFFITI',
	'LITTER OR DUMPING', 'NOISE COMPLAINTS', 'PARKING OR PAY PARKING', 'PARKS',
	'ROADS, SIDEWALKS OR STREET SIGNS', 'SECONDARY SUITE INQUIRIES', 'SEWAGE',
	'SNOW AND ICE', 'STORM DRAINAGE, CREEKS, AND DITCHES', 'TAP WATER SUPPLY',
	'TRAFFIC CALMING', 'TRAFFIC SIGNALS OR STREET LIGHTS', 'TRANSPORTATION PLANNING INQUIRIES',
	'TREES', 'UNSIGHTLY PROPERTY', 'WASTE COLLECTION'];

const styles = {
	agency: {
		margin: 12
	},
	agencyText: {
		margin: 0
	},
	input: {
		margin: 16
	},
	select: {
		margin: 16
	},
	inputContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
};

// const Agency = ({name}) => (
// 	<div style={styles.agency}>
// 		<h4 style={styles.agencyText}>{name}</h4>
// 	</div>
// );

export default class UserForm extends Component {
	constructor() {
		super();
		this.state = {
			fieldText: "",
			selectedAgency: AGENCIES[0],
			suggestedAgency: ''
		};

		this.handleChangeFieldText = this.handleChangeFieldText.bind(this);
		this.handleChangeSelection = this.handleChangeSelection.bind(this);
		this.suggestAgency = this.suggestAgency.bind(this);
	}

	render() {
		const {fieldText, selectedAgency, suggestedAgency} = this.state;
		return (
			<div>
				<div style={styles.inputContainer}>
				<input
					type="text"
					value={fieldText}
					onChange={this.handleChangeFieldText}
					style={styles.input}
				/>
				<select value={selectedAgency} onChange={this.handleChangeSelection}>
					{AGENCIES.map((agency) => (
						<option key={agency}>{agency}</option>
					))}
				</select>
				</div>
				{
					suggestedAgency.length ?
					<div style={styles.suggestedAgency}>
						<h4>{suggestedAgency}</h4>
					</div> :
					null
				}
			</div>
		);
	}

	handleChangeFieldText(e) {
		this.setState({fieldText: e.target.value});
		this.suggestAgency();
	}

	handleChangeSelection(e) {
		this.setState({selectedAgency: e.target.value});
	}

	suggestAgency() {
		const {fieldText} = this.state;
		if (fieldText.length < 4) {
			this.setState({suggestedAgency: ''});
			return;
		}

		const tokens = fieldText.split(' ');
		console.log(tokens);
		for (let i = 0; i < tokens.length; i++) {
			const uppercaseToken = tokens[i].toUpperCase();
			for (let j = 0; j < AGENCIES.length; j++) {
				if (AGENCIES[j].includes(uppercaseToken)) {
					console.log(tokens, i, AGENCIES[j]);
					this.setState({suggestedAgency: AGENCIES[j]});
					return;
				}
			}
		}
		this.setState({suggestedAgency: ''});
	}
}
