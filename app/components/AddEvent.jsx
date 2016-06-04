//app/components/AddEvent.jsx

import React from 'react';

export default class AddEvent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			geoLocationChecked: false,
			geoAddressFull: '',
			geoAdd1: '',
			geoCity: '',
			geoZip: ''
		}
	}

	componentDidMount() {
		this.getGeolocation();
	}

	render() {
		return (
			<div>
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
{/* NOTE to REVIEWER: removed this because it seemed redundant, this data should be grabbed from cur user session info
					<div className="form-group">
						<label htmlFor="evt-host" className="col-sm-2 control-label">Host</label>
						<div className="col-sm-10">
							<input type="text" id="evt-host" className="form-control" name="evt-host" required />
						</div>
					</div>
*/}
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
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<div className="checkbox">
								<label>
									<input type="checkbox" id="curLocation" defaultChecked onChange={this.toggleGeolocation} /> Use current location
								</label>
							</div>
						</div>
					</div>
					<div className="add-group">
						<div className="form-group">
							<label htmlFor="venue" className="col-sm-2 control-label">Venue</label>
							<div className="col-sm-10">
								<input type="text" id="venue" className="form-control" name="venue" placeholder="(optional)" />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="add1" className="col-sm-2 control-label">Street Address</label>
							<div className="col-sm-10">
								<input type="text" id="add1" className="form-control" name="address" required autoComplete="street-address" value={this.state.geoAdd1} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="city" className="col-sm-2 control-label">City</label>
							<div className="col-sm-10">
								<input type="text" id="city" className="form-control" name="province" required autoComplete="address-level2" value={this.state.geoCity} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="zip" className="col-sm-2 control-label">Zip Code</label>
							<div className="col-sm-10">
								<input type="number" id="zip" className="form-control" name="state" required autoComplete="postal-code" value={this.state.geoZip} />
							</div>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="event-msg" className="col-sm-2 control-label">Event Note</label>
						<div className="col-sm-10">
							<input type="text" id="event-msg" className="form-control" name="event-msg" placeholder="(optional)" />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="event-guests" className="col-sm-2 control-label">Guests</label>
						<div className="col-sm-10">
							<textarea id="event-guests" className="form-control" placeholder="(optional) Separate guests with a new line"></textarea>
						</div>
					</div>

					<div className="text-center">
						<button className="btn btn-primary btn-block" id="event-submit" onClick={this.validateEventForm} type="button">Save</button>
					</div>
				</form>
			</div>
		);
	}

	//helpers
	getGeolocation = () => {
		var that = this;
		let geoLocationChk = document.getElementById('curLocation');
		var myInit = { method: 'GET',
			mode: 'cors',
			cache: 'default' };
		//check geolocation
		var reverseGeoCodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
		var lat, long, geoAdd1, geoCity, geoZip;
		//array representation of geolocation (add1, city, zip)
		let geoAddFullAr = [];
		var results;

		if ("geolocation" in navigator) {
			//console.log('geolocation supported');
			navigator.geolocation.getCurrentPosition(function(position) {
				lat = position.coords.latitude;
				long = ',' + position.coords.longitude;
				reverseGeoCodeUrl += lat + long;

				$.ajax(reverseGeoCodeUrl).done(function(data) {
					results = data['results'][0]['address_components'];
					geoAdd1 = results[0]['short_name'] + ' ' + results[1]['short_name'];
					//console.log('geoAdd1: ' + geoAdd1);
					geoCity = results[2]['short_name'];
					//console.log('geoCity: ' + geoCity);
					geoZip = results[6]['short_name'];
					//console.log('geoZip: ' + geoZip);

					this.setState({
						geoLocationChecked: true,
						geoAdd1: geoAdd1,
						geoCity: geoCity,
						geoZip: geoZip
					});
					//console.log('this: ' + this);
					//console.log('state geoAdd1: ' + this.state.geoLocationChecked);
				}.bind(that)).fail(function(jqXHR, textStatus, errorThrown) {
					console.log('err: ' + errorThrown);
				}.bind(that));

			}, function(error) {
				console.log('sorry, unable to retrieve location');
			});
		}
	};

	toggleGeolocation = () => {
		if (this.state.geoLocationChecked) {
			this.setState({
				geoLocationChecked: false,
				geoAdd1: '',
				geoCity: '',
				geoZip: ''
			});
		} else {
			this.setState({
				geoLocationChecked: true
			});
			this.getGeolocation();
		}
	}

	//parse guest string input val to array
	guestStrToList = () => {
		let guests = document.getElementById('event-guests');
		return guests.value.split('\n');
	}

	validateEventForm = () => {
		let guestAr = this.guestStrToList();
//TODO
		//if (no form errors) {
			//submit form, save to data store
		//} else {
			//prevent submit, give error msg
		//}
	}

}