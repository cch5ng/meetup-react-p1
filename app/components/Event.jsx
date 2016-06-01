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
			<div>Event</div>

		);
	}

}