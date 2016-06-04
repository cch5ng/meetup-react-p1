//app/components/Event.jsx

import React from 'react';
// import {Modal} from 'react-bootstrap';
// import {Button} from 'react-bootstrap';
// import {Input} from 'react-bootstrap';
import Rebase from 're-base';
import uuid from 'node-uuid';

// var base = Rebase.createClass('https://recipe-keeper.firebaseio.com/web/data');
// var recipesRef = new Firebase("https://recipe-keeper.firebaseio.com/recipes");
// var stepsEditStr = '';

export default class Event extends React.Component {

	constructor(props) {
		super(props);

		// let stepsStr = this.convertStepToString(this.props.steps);
		// let ingredientsStr = this.convertIngredientToString(this.props.ingredients);

		this.state = {
			name: this.props.name,
			type: this.props.type,
			startDate: this.props.startDate,
			endDate: this.props.endDate,
			location: this.props.location,
			msg: this.props.msg,
			guests: this.props.guests
		}
	}

	render() {
		return (
			<div>
				<details>
					<summary>
						<b>Event</b> {this.state.name} ({this.state.startDate})
					</summary>
					<ul>
						<li><b>Type</b> {this.state.type}</li>
						<li><b>Host</b> {this.state.host}</li>
						<li><b>Date</b> {this.state.startDate} - {this.state.endDate}</li>
						<li><b>Location</b> {this.state.location}</li>
						<li><b>Message from Host</b> {this.state.msg}</li>
						<li><b>Guests</b> {this.state.guests}</li>
					</ul>
				</details>
			</div>

		);
	}

}