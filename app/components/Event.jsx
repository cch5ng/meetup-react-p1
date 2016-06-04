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
			venue: this.props.venue,
			add1: this.props.add1,
			city: this.props.city,
			zip: this.props.zip,
			msg: this.props.msg,
			guests: this.props.guests
		}
	}

	render() {
		return (
			<div>
				<details>
					<summary>
						<b>{this.state.name}</b>  (on {this.friendlyDate(this.state.startDate)})
					</summary>
					<ul>
						<li><b>Type</b> {this.state.type}</li>
						<li><b>Host</b> {this.state.host}</li>
						<li><b>Date</b> {this.friendlyDate(this.state.startDate)} - {this.friendlyDate(this.state.endDate)}</li>
{/* TODO fix location*/}
						<li><b>Location</b> {this.aggregateLocation()}</li>
						<li><b>Message from Host</b> {this.state.msg}</li>
						<li><b>Guests</b> {this.friendlyGuestList()}</li>
					</ul>
				</details>
			</div>

		);
	}

	//helpers
	aggregateLocation = () => {
		let location = '';
		location = this.state.venue + ', ' + this.state.add1 + ', ' + this.state.city + ' ' + this.state.zip;
		return location;
	};

	friendlyDate = (dateMs) => {
		let objDate = new Date(dateMs);
		let fDate = '';
		let fTime = this.friendlyTime(objDate.getHours(), objDate.getMinutes());
		fDate = (objDate.getMonth() + 1) + '/' + objDate.getDate() + '/' + objDate.getFullYear() + ' at ' + fTime;
		return fDate;
	};

	friendlyTime = (hours, minutes) => {
		let fTime = '',
			fHours = '',
			fMinutes = '',
			suffix = '';

		if (hours > 12) {
			suffix = 'pm';
			fHours = (hours - 12).toString();
		} else {
			suffix = 'am';
			fHours = hours.toString();
		}

		if (minutes < 10) {
			fMinutes = '0' + minutes.toString();
		} else {
			fMinutes = minutes.toString();
		}

		fTime = fHours + ':' + fMinutes + suffix;
		return fTime;
	};

	friendlyGuestList = () => {
		let fList = '',
			len = this.state.guests.length;
		this.state.guests.forEach((guest, idx) => {
			if (idx < len - 1) {
				fList += guest + ', ';
			} else {
				fList += guest;
			}
		});
		return fList;
	};

}