import React, { Component } from 'react';
import {  Button} from 'antd';
import {Link} from 'react-router-dom'


export default class CallStockman extends Component {
	state = {};

	// input

	// form

	render() {
		return (
			<div className="Call_Div">

				<form name="contactform" className="contactform" onSubmit={this.handleSubmit}>
        
					{' '}
					<h5 className="CallH">Name</h5>
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChangeName}
						placeholder="Name"
						className="Call_Input"
						required
					/>
					<br />
					<h5 className="CallH">Phone</h5>
					<input
						type="text"
						name="phone"
						value={this.state.phone}
						onChange={this.handleChangePhone}
						placeholder="Phone"
						className="Call_Input"
						required
					/>
					<br />
					<h5 className="CallH">WHy do you need a Stockman</h5>
					<input
						type="text"
						name="acctNo"
						value={this.state.acctNo}
						onChange={this.handleChangeAcctNo}
						placeholder=""
						className="Call_T"
						required
					/>
					<br />
					<Link to='Dashboard'>
					<Button value="Submit" type="dashed" block>
						Ride On
					</Button>
					</Link>
				</form>
			</div>
		);
	}
}
