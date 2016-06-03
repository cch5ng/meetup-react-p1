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
			geoLocationChecked: false,
			geoAddressFull: '',
			geoAdd1: '',
			geoCity: '',
			geoZip: ''
			//isOpen: false,
			// name: this.props.name,
			// ingredients: this.props.ingredients,
			// ingredientsStr: ingredientsStr,
			// steps: this.props.steps,
			// stepsStr: stepsStr
		}
	}

	componentDidMount() {
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
				console.log('geolocation supported');
				navigator.geolocation.getCurrentPosition(function(position) {
					lat = position.coords.latitude;
					long = ',' + position.coords.longitude;
					reverseGeoCodeUrl += lat + long;

				//test fetch api support
				if (self.fetch) {
					fetch(reverseGeoCodeUrl, myInit).then(function(response) {
						return response.json();
					}).then(function(data) {
						if (data) {
							//let data = response.json();
							console.log('data: ' + data);
							console.log('typeof data: ' + typeof data);
							console.log('data results: ' + data['results']);
							results = data['results'][0]['address_components'];
							geoAdd1 = results[0]['short_name'];
							geoAddFullAr.push(geoAdd1);
							console.log('geoAdd1: ' + geoAdd1);
							geoCity = results[1]['short_name'];
							geoAddFullAr.push(geoCity);
							console.log('geoCity: ' + geoCity);
							geoZip = results[5]['short_name'];
							geoAddFullAr.push(geoZip);
							console.log('geoZip: ' + geoZip);

							//this.setState({
							//	geoLocationChecked: true,
							//	geoAdd1: geoAdd1,
							//	geoCity: geoCity,
							//	geoZip: geoZip
							//});
							//console.log('this: ' + this);
							//console.log('state geoAdd1: ' + this.state.geoAdd1);
							// this.setState({
							// 	geoAdd1: geoAdd1,
							// 	geoCity: geoCity,
							// 	geoZip: geoZip
							// });
						}
					});
				} else {
					console.log('fetch api not supported');
				}
			}) //end getCurrentPosition

			}, function(error) {
				console.log('sorry, unable to retrieve location');
			});

	}

	render() {
		//get geolocation
		// let locationAr = [];
		// locationAr = this.getGeolocation();


		// console.log('locationAr: ' + locationAr);

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
{/* TODO is this necessary? 
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
{/* TODO js logic for checkbox */}

						<div className="checkbox col-sm-10 col-sm-offset-2">
							<label>
								<input id="curLocation" type="checkbox" onChange={this.getGeolocation} />Use current location
							</label>
						</div>
						<br /><br />

						<div className="add-group">
							<div className="form-group">
								<label htmlFor="location" className="col-sm-2 control-label">Location</label>
								<div className="col-sm-10">
									<input type="text" id="location" className="form-control" name="location" placeholder="(optional) Venue name" />
								</div>
							</div>
{/* TODO fill in autoComplete */}
							<div className="form-group">
								<label htmlFor="add1" className="col-sm-2 control-label">Street Address</label>
								<div className="col-sm-10">
									<input type="text" id="add1" className="form-control" name="add1" required autoComplete="" value={this.state.geoAdd1} onChange={this.geoLocation}/>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="city" className="col-sm-2 control-label">City</label>
								<div className="col-sm-10">
									<input type="text" id="city" className="form-control" name="city" required autoComplete="" value={this.state.geoCity} onChange={this.geoLocation} />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="zip" className="col-sm-2 control-label">Zip Code</label>
								<div className="col-sm-10">
									<input type="number" id="zip" className="form-control" name="zip" required autoComplete="" value={this.state.geoZip} onChange={this.geoLocation} />
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

						<div className="col-md-4 center-block">
							<button className="btn btn-primary col-sm-2" id="event-submit" type="submit">Save</button>
						</div>
					</form>
				</div>
			</div>
		);
	}

	//helpers
	getGeolocation = () => {
		console.log('start geolocate');
		let geoLocationChk = document.getElementById('curLocation');
		// var mAdd1 = document.getElementById('add1');
		// var mCity = document.getElementById('city');
		// var mZip = document.getElementById('zip');

		console.log('geolocate chk attrib checked val: ' + geoLocationChk.getAttribute('checked'));
		console.log('geolocate chk val: ' + geoLocationChk.value);
		if (this.state.geoLocationChecked === false) {
			console.log('geolocate checked');
			var myInit = { method: 'GET',
               //headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
			//check geolocation
			var reverseGeoCodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
			var lat, long;
			var geoAdd1, geoCity, geoZip;
			//array representation of geolocation (add1, city, zip)
			let geoAddFullAr = [];
			var results;

			if ("geolocation" in navigator) {
				console.log('geolocation supported');
				navigator.geolocation.getCurrentPosition(function(position) {
					lat = position.coords.latitude;
					long = ',' + position.coords.longitude;
					reverseGeoCodeUrl += lat + long;

				//test fetch api support
				if (self.fetch) {
					fetch(reverseGeoCodeUrl, myInit).then(function(response) {
						return response.json();
					}).then(function(data) {
						if (data) {
							//let data = response.json();
							console.log('data: ' + data);
							console.log('typeof data: ' + typeof data);
							console.log('data results: ' + data['results']);
							results = data['results'][0]['address_components'];
							geoAdd1 = results[0]['short_name'];
							geoAddFullAr.push(geoAdd1);
							console.log('geoAdd1: ' + geoAdd1);
							geoCity = results[1]['short_name'];
							geoAddFullAr.push(geoCity);
							console.log('geoCity: ' + geoCity);
							geoZip = results[5]['short_name'];
							geoAddFullAr.push(geoZip);
							console.log('geoZip: ' + geoZip);

							//this.setState({
							//	geoLocationChecked: true,
							//	geoAdd1: geoAdd1,
							//	geoCity: geoCity,
							//	geoZip: geoZip
							//});
							//console.log('this: ' + this);
							//console.log('state geoAdd1: ' + this.state.geoAdd1);
							return {
								geoAdd1: geoAdd1,
								geoCity: geoCity,
								geoZip: geoZip
							}
						}
					});
				} else {
					console.log('fetch api not supported');
				}

			}, function(error) {
				console.log('sorry, unable to retrieve location');
			});







				// 	$.ajax(reverseGeoCodeUrl)
				// 		.done(function(data) {
				// 			if (data) {
				// 				results = data['results'][0]['address_components'];
				// 				geoAdd1 = results[0]['short_name'];
				// 				geoAddFullAr.push(geoAdd1);
				// 				console.log('geoAdd1: ' + geoAdd1);
				// 				geoCity = results[1]['short_name'];
				// 				geoAddFullAr.push(geoCity);
				// 				console.log('geoCity: ' + geoCity);
				// 				//geoState = results[3]['short_name'];
				// 				//geoAddFullAr.push(geoState);
				// 				//console.log('geoState: ' + geoState);
				// 				//geoCountry = results[5]['short_name'];
				// 				//geoAddFull.push(geoCountry);
				// 				//console.log('geoCountry: ' + geoCountry);
				// 				geoZip = results[5]['short_name'];
				// 				geoAddFullAr.push(geoZip);
				// 				console.log('geoZip: ' + geoZip);
				// 				//return geoAddFullAr;

				// 				// mAdd1.value = geoAdd1;
				// 				// mCity.value = geoCity;
				// 				// mZip.value = geoZip;

				// 				//this.setState({
				// 				//	geoLocationChecked: true,
				// 				//	geoAdd1: geoAdd1,
				// 				//	geoCity: geoCity,
				// 				//	geoZip: geoZip
				// 				//});
				// 				console.log('this: ' + this);
				// 				console.log('state geoAdd1: ' + this.state.geoAdd1);

				// 			}
				// 		}).fail(function(jqXHR, textStatus, errorThrown) {
				// 			console.log('err: ' + errorThrown);
				// 			return null;
				// 		});
				// 		console.log('lat: ' + position.coords.latitude + '; long: ' + position.coords.longitude);
				// 		//do_something(position.coords.latitude, position.coords.longitude);
				// 	}, function(error) {
				// 		console.log('sorry, unable to retrieve location');
				// });

				// geolocation is available
			} else {
				console.log('geolocation not supported');
			  /* geolocation IS NOT available */
			}

		} else {
			//use curr location checkbox unchecked
			console.log('chk geoLocation unchecked');
			this.setState({
				geoLocationChecked: false,
				geoAdd1: '',
				geoCity: '',
				geoZip: ''
			});
		}
	};

}