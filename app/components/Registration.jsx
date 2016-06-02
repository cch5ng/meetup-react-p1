//app/components/Registration.jsx

import React from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import Rebase from 're-base';
import uuid from 'node-uuid';

// var base = Rebase.createClass('https://recipe-keeper.firebaseio.com/web/data');
// var recipesRef = new Firebase("https://recipe-keeper.firebaseio.com/recipes");
// var stepsEditStr = '';

export default class Registration extends React.Component {

	constructor(props) {
		super(props);

		// let stepsStr = this.convertStepToString(this.props.steps);
		// let ingredientsStr = this.convertIngredientToString(this.props.ingredients);

		this.state = {
			isOpen: false,
			isEmailValid: true,
			emailErrors: null,
			isPwdValid: true,
			pwdErrors: [],
			isPwd2Valid: true,
			pwd2Errors: []
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
					<h4>Register</h4>
					<form className="form-horizontal" id="reg-form">
						<div className="form-group">
							<label htmlFor="name" className="col-md-2 control-label">Name</label>
							<div className="col-md-10">
								<input type="text" id="name" className="form-control" name="name" required autoComplete="name" placeholder="Full Name" />
							</div>
						</div>
	{/* TODO JS validation logic */}
						<div className="form-group">
							<label htmlFor="email" className="col-md-2 control-label">Email Address</label>
							<div className="col-md-10">
								<input id="email" className="form-control" name="email" type="email" onChange={this.validateEmail} required autoComplete="email" placeholder="name@example.com" />
								{this.state.isEmailValid ? null : this.displayEmailError()}
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="pwd" className="col-md-2 control-label">Password</label>
							<div className="col-md-10">
								<input id="pwd" className="form-control" name="pwd" type="password" placeholder="Min. length of 8, one number, one upper-case letter" required />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="pwd2" className="col-md-2 control-label">Confirm Password</label>
							<div className="col-md-10">
								<input id="pwd2" className="form-control" name="pwd2" type="password" required />
							</div>
						</div>
						<div className="col-md-4 text-center">
							<button className="btn btn-primary" id="register-submit" type="button">Save</button>
						</div>
					</form>
				</div>
			</div>

		);
	}

	validateEmail = (e) => {
		console.log('email event handler');
		var email = document.getElementById('email');

		if (email.value.match(/\w+@\w+.\w+/g)) {
			this.setState({isEmailValid: true, emailErrors: ''})
			email.setCustomValidity('');
			console.log('isEmailValid: ' + this.state.isEmailValid);
		} else {
			this.setState({isEmailValid: false, emailErrors: 'Email address should have the format: name@mail.com'})
			email.setCustomValidity("Email address should have the format: name@mail.com");
			console.log('isEmailValid: ' + this.state.isEmailValid);
		}
	};

	displayEmailError = () => {
		//var emailErrAr = this.state.emailErrors;
		return (
			<p className="email-error error">{this.state.emailErrors}</p>
		)
	}
}