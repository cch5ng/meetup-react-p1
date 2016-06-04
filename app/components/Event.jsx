//app/components/Event.jsx

import React from 'react';
import Rebase from 're-base';
import uuid from 'node-uuid';

export default class Event extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
			type: this.props.type,
			host: this.props.host,
			startDate: this.props.startDate,
			endDate: this.props.endDate,
//TODO fix
			//location: this.props.location,
			msg: this.props.msg,
			guests: this.props.guests
		}
	}

	render() {
		return (
			<div>
				<details>
					<summary>
						<b>{this.state.name}</b>  (on {this.state.startDate})
					</summary>
					<ul>
						<li><b>Type</b> {this.state.type}</li>
						<li><b>Host</b> {this.state.host}</li>
						<li><b>Date</b> {this.state.startDate} - {this.state.endDate}</li>
{/* TODO fix location*/}
						<li><b>Location</b> {this.state.location}</li>
						<li><b>Message from Host</b> {this.state.msg}</li>
						<li><b>Guests</b> {this.state.guests}</li>
					</ul>
				</details>
			</div>

		);
	}

}