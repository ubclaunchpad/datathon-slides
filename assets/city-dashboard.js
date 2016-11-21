import React, {Component, PropTypes} from 'react';

const styles = {
	icon: {
		padding: 2
	},
	container: {
		backgroundColor: 'white',
		display: 'flex',
		marginTop: 16
	},
	tweets: {
		width: '40%',
		display: 'flex',
		borderRightWidth: 1,
		borderRightStyle: 'solid',
		flexGrow: 1,
		flexDirection: 'column'
	},
	requests: {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column'
	},
	tweet: {
		container: {
			padding: 8,
			textAlign: 'left',
			borderBottomWidth: 1,
			borderBottomStyle: 'solid'
		},
		body: {
			fontSize: 16
		},
		user: {
			fontSize: 14,
			color: '#999'
		}
	},
	request: {
		container: {
			display: 'flex',
			flexGrow: 1,
			justifyContent: 'space-between',
			padding: 8,
			textAlign: 'left',
			borderBottomWidth: 1,
			borderBottomStyle: 'solid'

		},
		description: {
			fontSize: 16
		},
		address: {
			fontSize: 14,
			color: '#999'
		},
		dupes: {
			fontSize: 14
		}
	}
};

const REQS = [{
	"address": "16376 108A AVE",
	"address_id": "61332",
	"agency_responsible": "ROADS",
	autoAssigned: true,
	"description": "Notification of Crack Seal",
	"lat": "49.20",
	"long": "-122.77",
	"requested_datetime": "2016-11-18T13:12:23-08:00",
	"service_code": "142699",
	"service_name": "RDS-Crack Seal",
	"service_notice": "...",
	"service_request_id": "949767",
	"status": "OPEN"
}, {
	"address": "124 ST & 98 AVE",
	"agency_responsible": "ROADS",
	"description": "Notification of Signage Problem",
	"numDuplicates": 2,
	"expected_datetime": "2016-11-25T13:23:26-08:00",
	"lat": "49.18",
	"long": "-122.88",
	"requested_datetime": "2016-11-18T13:23:26-08:00",
	"service_code": "66",
	"service_name": "RDS-Signage",
	"service_notice": "...",
	"service_request_id": "949773",
	"status": "OPEN",
	"updated_datetime": "2016-11-18T13:26:01-08:00"
}, /*{
	"address": "KING RD & 116A AVE",
	"agency_responsible": "ROADS",
	"description": "Notification of Signage Problem",
	"expected_datetime": "2016-11-18T22:32:21-08:00",
	"lat": "49.21",
	"long": "-122.82",
	"requested_datetime": "2016-11-18T14:32:21-08:00",
	"service_code": "66",
	"service_name": "RDS-Signage",
	"service_notice": "...",
	"service_request_id": "949809",
	"status": "OPEN",
	"updated_datetime": "2016-11-18T14:32:21-08:00"
}, */{
	"address": "136B ST and 70 AVE",
	"agency_responsible": "ROADS",
	"description": "Notification of Asphalt Repair",
	"expected_datetime": "2016-11-19T20:35:41-08:00",
	"lat": "49.13",
	"long": "-122.8435",
	"requested_datetime": "2016-11-18T20:35:41-08:00",
	"service_code": "143509",
	"service_name": "RDS-Asphalt Repair",
	"service_notice": "...",
	"service_request_id": "949853",
	"status": "OPEN"
},
{
		"address": "16644 BELL RD",
		"address_id": "14859",
		"agency_responsible": "ROADS",
		"description": "Notification of Other Road Problems",
		"expected_datetime": "2016-11-25T21:50:30-08:00",
		"lat": "49.1072",
		"long": "-122.7615",
		"requested_datetime": "2016-11-18T21:50:30-08:00",
		"service_code": "71",
		"service_name": "RDS-Other",
		"service_request_id": "949859",
		"status": "OPEN"
}];
// Need less negative tweets that are not @CityofSurrey
const TWEETS = [

	{
			"user": "@Burger",
			"body": "It's been over two weeks since you said you'd send an OPS crew to clean up the trash and yet nothing has been done",
			"url": "https://twitter.com/CarsonBurgin/status/574387087329251328"

	},

    {
        "user": "Andrew",
        "body": "@CityofSurrey  stop sign at 18 A and 146 is backwards.",
        "url": "https://twitter.com/HudsonHomeTeam/status/799305856441401344"

},
    {
        "user": "Daryl Dela Cruz",
        "body": "I find it amusing how the @CityofSurrey installed brand new L-turn signals on EVERY movement *EXCEPT* the 1 used by #301 bus @ Scott & 84th ",
        "url": "https://twitter.com/daka_x/status/796494166595252225"

    },

    {
        "user": "Beachview Homes",
        "body": "Family of 3 struck by vehicle crossing 160&27 @CityofSurrey  could have been prevented requests for crosswalk denied ",
        "url": "https://twitter.com/Michell56169820/status/794592883273703426"

    }];

const images = {
	pin: require('./pin.png'),
	mail: require('./envelope.png'),
	twitter: require('./twitter.png')
};

const Tweet = ({body, user, url}) => (
	<div style={styles.tweet.container} onClick={() => window.open(url)}>
		<h1 style={styles.tweet.body}>{body}</h1>
		<h2 style={styles.tweet.user}>{user}</h2>
	</div>
);

Tweet.propTypes = {
	body: PropTypes.string,
	user: PropTypes.string
};

const Request = (props) => (
	<div style={styles.request.container}>
		<div style={{flexDirection: 'column'}}>
			<h1 style={styles.request.description}>{props.description}</h1>
			<h2 style={styles.request.address}>{props.address}</h2>
		</div>
		<div style={{flexDirection: 'column', justifyContent: 'right'}}>
			<img src={images.mail.replace("/", "")} style={styles.icon} />
			<img src={images.pin.replace("/", "")} style={styles.icon} />
			{
				props.numDuplicates ?
				<h2 style={styles.request.dupes}>{props.numDuplicates} duplicates</h2> :
				null
			}
			{
				props.autoAssigned ?
				<h2 style={styles.request.dupes}>Auto assigned</h2> :
				null
			}
		</div>
	</div>
);

Request.propTypes = {
	agency: PropTypes.string,
	address: PropTypes.string,
	description: PropTypes.string,
	numDuplicates: PropTypes.number,
	autoAssigned: PropTypes.bool
};

export default class CityDashboard extends Component {
	constructor() {
		super();
		this.state = {
			requests: REQS,
			tweets: TWEETS
		};
	}

	render() {
		return (
			<div>
				<h1 style={{margin: 0, fontSize: 48}}>City Dashboard</h1>
				<div style={styles.container}>
					<div style={styles.tweets}>
						<div style={{}}>
							<img src={images.twitter.replace("/", "")} style={{width: 48, height: 48}} />
						</div>
						{this.state.tweets.map((tweet, i) => <Tweet key={i} {...tweet} />)}
					</div>
					<div style={styles.requests}>
						{this.state.requests.map((req, i) => <Request key={i} {...req} />)}
					</div>
				</div>
			</div>
		);
	}
}
