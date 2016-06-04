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
			pwd2Errors: [],
			passwordsMatch: true,
			passwordsMatchError: null
			// name: this.props.name,
			// ingredients: this.props.ingredients,
			// ingredientsStr: ingredientsStr,
			// steps: this.props.steps,
			// stepsStr: stepsStr
		}
	}

	render() {


		return (
			<div>
				<h3>Register</h3>
				<form className="form-horizontal"> {/* id="reg-form" */}
					<div className="form-group">
						<label htmlFor="name" className="col-sm-2 control-label">Name</label>
						<div className="col-sm-10">
							<input type="text" id="name" className="form-control" name="name" required autoComplete="name" placeholder="Full Name" />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="email" className="col-sm-2 control-label">Email Address</label>
						<div className="col-sm-10">
							<input id="email" className="form-control" name="email" type="email" onChange={this.validateEmail} required autoComplete="email" placeholder="name@example.com" />
							{this.state.isEmailValid ? null : this.displayEmailError()}
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="pwd" className="col-sm-2 control-label">Password</label>
						<div className="col-sm-10">
							<input id="pwd" className="form-control" name="pwd" type="password" onChange={this.validatePwd} placeholder=">= 8 chars, 1 num, 1 CAP, 1 special char" required />
							{this.state.isPwdValid ? null : this.displayPwdError()}
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="pwd2" className="col-sm-2 control-label">Confirm Password</label>
						<div className="col-sm-10">
							<input id="pwd2" className="form-control" name="pwd2" type="password" onChange={this.validatePwd2} placeholder=">= 8 chars, 1 num, 1 CAP, 1 special char" required />
							{this.state.isPwd2Valid ? null : this.displayPwd2Error()}
							{this.state.passwordsMatch ? null : this.displayPwdMatchError()}
						</div>
					</div>
					<div className="text-center">
						<button className="btn btn-primary btn-block" id="register-submit" onClick={this.validateForm} type="button">Save</button>
					</div>
				</form>
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
	};

	validatePwd = (e) => {
		var pwd = document.getElementById('pwd');
		var pwdErrorsAr = [];

		console.log('pwd event listener');
		if (pwd.value.match(/[A-Z]/g)) {
			
		//pwd.setCustomValidity("Email address should contain a '@' and '.' characters.");
		} else {
			pwdErrorsAr.push('Password should contain at least one upper-case letter');
		}
		if (pwd.value.match(/\d/g)) {
			
		//pwd.setCustomValidity("Email address should contain a '@' and '.' characters.");
		} else {
			pwdErrorsAr.push('Password should contain at least one number');
		}

		//less than 8 chars
		if (pwd.value.length < 8) {
			pwdErrorsAr.push('Password needs 8 or more characters');
		}

		//contains special char
		if (!pwd.value.match(/[\!\@\#\$\%\^\&\*]/g)) {
			pwdErrorsAr.push('Password needs a special character: !, @, #, $, %, ^, & or *');
		}

		if (pwdErrorsAr.length === 0) {
			this.setState({isPwdValid: true, pwdErrors: []})
			pwd.setCustomValidity('');
		} else {
			this.setState({isPwdValid: false, pwdErrors: pwdErrorsAr})
			pwd.setCustomValidity(pwdErrorsAr.join('. '));
		}
		console.log('pwdErrorsAr: ' + pwdErrorsAr);
	};

	validatePwd2 = (e) => {
		var pwd2 = document.getElementById('pwd2');
		var pwdErrorsAr2 = [];

		console.log('pwd event listener');
		if (pwd2.value.match(/[A-Z]/g)) {
			
		//pwd.setCustomValidity("Email address should contain a '@' and '.' characters.");
		} else {
			pwdErrorsAr2.push('Password should contain at least one upper-case letter');
		}
		if (pwd2.value.match(/\d/g)) {
			
		//pwd.setCustomValidity("Email address should contain a '@' and '.' characters.");
		} else {
			pwdErrorsAr2.push('Password should contain at least one number');
		}

		//less than 8 chars
		if (pwd2.value.length < 8) {
			pwdErrorsAr2.push('Password needs 8 or more characters');
		}

		//contains special char
		if (!pwd2.value.match(/[\!\@\#\$\%\^\&\*]/g)) {
			pwdErrorsAr2.push('Password needs a special character: !, @, #, $, %, ^, & or *');
		}

		if (pwdErrorsAr2.length === 0) {
			this.setState({isPwd2Valid: true, pwd2Errors: []})
			pwd2.setCustomValidity('');
		} else {
			this.setState({isPwd2Valid: false, pwd2Errors: pwdErrorsAr2})
			pwd2.setCustomValidity(pwdErrorsAr2.join('. '));
		}
		console.log('pwdErrorsAr2: ' + pwdErrorsAr2);

	};

	displayPwdError = () => {
		let pwdErrors = this.state.pwdErrors;
		return (
			pwdErrors.map(err =>
				<p className="pwd-error error">{err}</p>
			)
		)
	};

	displayPwd2Error = () => {
		let pwd2Errors = this.state.pwd2Errors;
		return (
			pwd2Errors.map(err =>
				<p className="pwd-error error">{err}</p>
			)
		)
	};

	displayPwdMatchError = () => {
		//let pwdMatchErr = this.state.pwdErrors;
		return (
				<p className="pwd-match-error error">{this.state.passwordsMatchError}</p>
		)
	};

	passwordsMatch = () => {
		let pwd = document.getElementById('pwd');
		let pwd2 = document.getElementById('pwd2');

		if (pwd.value === pwd2.value) {
			this.setState({passwordsMatch: true, passwordsMatchError: null});
		} else {
			this.setState({passwordsMatch: false, passwordsMatchError: 'Passwords are not matching. Check for typos'});
		}

	}

	validateForm = () => {
		this.passwordsMatch();

		if ( this.state.isEmailValid && this.state.isPwdValid && this.state.isPwd2Valid && this.state.passwordsMatch) {
			//fields are valid, submit form and save data
			console.log('submitting form and saving data');
		} else {
			//don't submit form
			console.log('cannot submit form. fix validation errors first');
		}
	}


}