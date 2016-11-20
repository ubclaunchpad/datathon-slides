import React, {Component} from "react";

const AGENCIES = ['ANIMAL CONTROL', 'BUILDING INQUIRIES', 'GARDEN BED', 'GRAFFITI',
	'LITTER OR DUMPING', 'NOISE COMPLAINTS', 'PARKING OR PAY PARKING', 'PARKS',
	'ROADS, SIDEWALKS OR STREET SIGNS', 'SECONDARY SUITE INQUIRIES', 'SEWAGE',
	'SNOW AND ICE', 'STORM DRAINAGE, CREEKS, AND DITCHES', 'TAP WATER SUPPLY',
	'TRAFFIC CALMING', 'TRAFFIC SIGNALS OR STREET LIGHTS', 'TRANSPORTATION PLANNING INQUIRIES',
	'TREES', 'UNSIGHTLY PROPERTY', 'WASTE COLLECTION'];

const LITTER_KEYWORDS = ['trash', 'garbage', 'refuse', 'pickup', 'litter', 'dump',
	'crap', 'can', 'bin'];

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
		this.handleChangeSelectionToSuggestion = this.handleChangeSelectionToSuggestion.bind(this);
		this.suggestAgency = this.suggestAgency.bind(this);
	}

	render() {
		const {fieldText, selectedAgency, suggestedAgency} = this.state;
		return (
			<div style={{marginTop: 16}}>
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
					<a
						style={styles.suggestedAgency}
						onClick={() => this.handleChangeSelectionToSuggestion('LITTER OR DUMPING')}
					>
						<h4>{suggestedAgency}</h4>
					</a> :
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

	handleChangeSelectionToSuggestion(agency) {
		this.setState({selectedAgency: agency});
	}

	suggestAgency() {
		const {fieldText} = this.state;
		if (fieldText.length < 4) {
			this.setState({suggestedAgency: ''});
			return;
		}

		const tokens = fieldText.split(' ');
		for (let i = 0; i < tokens.length; i++) {
			const t = tokens[i].toLowerCase();
			for (let j = 0; j < LITTER_KEYWORDS.length; j++) {
				if (LITTER_KEYWORDS[j].includes(t)) {
					this.setState({suggestedAgency: 'LITTER OR DUMPING'});
					return;
				}
			}
		}
		this.setState({suggestedAgency: ''});
	}
}
