//app/components/Events.jsx

import React from 'react';
//import Event from './Event.jsx';
import uuid from 'node-uuid';
//import {Modal} from 'react-bootstrap';
//import {Button} from 'react-bootstrap';
//import {Input} from 'react-bootstrap';

export default ({events, onDelete, onEdit}) => {
	return (
		<div className="">
			{events.map(event =>
				<Event key={event.key} name={event.name} type={event.type} location={event.location} host={event.host} startDate={event.startDate} endDate={event.endDate} msg={event.msg} guests={event.guests} />
			)}
		</div>
	)
}