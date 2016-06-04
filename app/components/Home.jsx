//app/components/Home.jsx

import React from 'react';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		// this.state = {
		// }
	}

	render() {
		return (
/* NOTE to REVIEWER this form is cosmetic and nonfunctional */
			<div>
				<h4>Login</h4>
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3 text-center">
						<button className="btn btn-default">Google Login</button>
						<button className="btn btn-default">Facebook Login</button>
					</div>
				</div>
				<div className="row spacer-md" />
				<form className="form-horizontal">
					<div className="form-group">
						<label htmlFor="email-login" className="col-sm-2 control-label">Email Address</label>
						<div className="col-sm-10">
							<input id="email-login" className="form-control" name="email-login" type="email" required autoComplete="email" />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="pwd-login" className="col-sm-2 control-label">Password</label>
						<div className="col-sm-10">
							<input id="pwd-login" className="form-control" name="pwd-login" type="password" required />
						</div>
					</div>
					<div className="text-center">
						<button className="btn btn-primary btn-block" id="btn-login" type="button">Log In</button>
					</div>
				</form>
			</div>
		);
	}
}