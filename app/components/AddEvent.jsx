//app/components/AddEvent.jsx

import React from 'react';
// import {Modal} from 'react-bootstrap';
// import {Button} from 'react-bootstrap';
// import {Input} from 'react-bootstrap';
import Rebase from 're-base';
import uuid from 'node-uuid';

// var base = Rebase.createClass('https://recipe-keeper.firebaseio.com/web/data');
// var recipesRef = new Firebase("https://recipe-keeper.firebaseio.com/recipes");
// var stepsEditStr = '';

export default class AddEvent extends React.Component {

	constructor(props) {
		super(props);

		// let stepsStr = this.convertStepToString(this.props.steps);
		// let ingredientsStr = this.convertIngredientToString(this.props.ingredients);

		this.state = {
			isOpen: false,
			// name: this.props.name,
			// ingredients: this.props.ingredients,
			// ingredientsStr: ingredientsStr,
			// steps: this.props.steps,
			// stepsStr: stepsStr
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row marketing">
					<h3>Add Event</h3>
					<form className="form-horizontal">
						<div className="form-group">
							<label htmlFor="evt-name" className="col-sm-2 control-label">Event Name</label>
							<div className="col-sm-10">
								<input type="text" id="evt-name" className="form-control" name="evt-name" required />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="evt-type" className="col-sm-2 control-label">Event Type</label>
							<div className="col-sm-10">
								<input list="evt-type" className="form-control" name="evt-type" />
								<datalist id="evt-type" >
								  <option value="Social" />
								  <option value="Business" />
								  <option value="Other" />
								</datalist>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="evt-host" className="col-sm-2 control-label">Host</label>
							<div className="col-sm-10">
								<input type="text" id="evt-host" className="form-control" name="evt-host" required />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="evt-start-date" className="col-sm-2 control-label">Start Date/Time</label>
							<div className="col-sm-10">
								<input id="evt-start-date" className="form-control" type="datetime-local" name="evt-start-date" required />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="evt-end-date" className="col-sm-2 control-label">End Date/Time</label>
							<div className="col-sm-10">
								<input id="evt-end-date" className="form-control" type="datetime-local" name="evt-end-date" required />
							</div>
						</div>
{/* TODO js logic for checkbox */}
						<div className="checkbox col-sm-10 col-sm-offset-2">
							<label>
								<input id="curLocation" type="checkbox" defaultChecked />Use current location
							</label>
						</div>
						<br /><br />
						<div className="add-group" hidden>
							<div className="form-group">
								<label htmlFor="location" className="col-sm-2 control-label">Location</label>
								<div className="col-sm-10">
									<input type="text" id="location" className="form-control" name="location" />
								</div>
							</div>
{/* TODO fill in autoComplete */}
							<div className="form-group">
								<label htmlFor="add1" className="col-sm-2 control-label">Street Address</label>
								<div className="col-sm-10">
									<input type="text" id="add1" className="form-control" name="add1" required autoComplete="" />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="city" className="col-sm-2 control-label">City</label>
								<div className="col-sm-10">
									<input type="text" id="city" className="form-control" name="city" required autoComplete="" />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="zip" className="col-sm-2 control-label">Zip Code</label>
								<div className="col-sm-10">
									<input type="number" id="zip" className="form-control" name="zip" required autoComplete="" />
								</div>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="event-msg" className="col-sm-2 control-label">Event Note</label>
							<div className="col-sm-10">
								<input type="text" id="event-msg" className="form-control" name="event-msg" />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="event-guests" className="col-sm-2 control-label">Guests</label>
							<div className="col-sm-10">
								<textarea id="event-guests" className="form-control" placeholder="Separate guests with a new line."></textarea>
							</div>
						</div>

						<div className="col-md-4 center-block">
							<button className="btn btn-primary col-sm-2" id="event-submit" type="submit">Save</button>
						</div>
					</form>
				</div>
			</div>
		);
	}

}