import React, {Component} from 'react';
import Checkbox from './components/Checkbox';
import OneLineInput from './components/OneLineInput';
import UserWriteText from './components/UserWriteText';


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			address: '',
			description: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAgeChange = this.handleAgeChange.bind(this);
		this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handleCommentChange = this.handleCommentChange.bind(this);
	}
	
	handleNameChange(e) {
		this.setState({name: e.target.value }, () => console.log('name:', this.state.name));
	}
	
	handleAgeChange(e) {
		this.setState({age: e.target.value }, () => console.log('age:', this.state.age));
	}
	handleAddressChange(e) {
		this.setState({address: e.target.value }, () => console.log('address:', this.state.address));
	}


	handleCommentChange(e) {
		this.setState({ comment: e.target.value }, () => console.log('comment', this.state.comment));
	}
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			name: '',
			age: '',
			address: '',
			comment: ''
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			name: this.state.name,
			age: this.state.age,
			address: this.state.address,
			comment: this.state.comment
		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
	}
	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<h5>Solar City Interest Form</h5>
				<OneLineInput
					inputType={'text'}
					title={'Full name'}
					name={'name'}
					controlFunc={this.handleNameChange}
					content={this.state.name}
					placeholder={'Type first and last name here'} />
				<OneLineInput
					inputType={'number'}
					title={'Age'}
					name={'age'}
					controlFunc={this.handleAgeChange}
					content={this.state.age}
					placeholder={'Enter your current age'} />
				<OneLineInput
					inputType={'number'}
					title={'Address'}
					name={'address'}
					controlFunc={this.handleAddressChange}
					content={this.state.address}
					placeholder={'Enter your current address'} />
				<UserWriteText
					title={'Comments?'}
					rows={5}
					resize={false}
					content={this.state.comment}
					name={'comment'}
					controlFunc={this.handleCommentChange}
					placeholder={'Please be thorough in your descriptions'} />
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
			</form>
		);
	}
}

export default Form;
