import React from 'react';

import './styles.css';

export default class MovieForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: props.title,
			descr: props.descr,
			id: props.id
		}
	}

	inputHandler =(e) => {
    const name = e.target.name;
    const value = e.target.value
    this.setState({
       [name]:value })
  }

	render() {

		console.log(this.state);
		const { onClose } = this.props;

		return(
			<div className="MovieFormWrapper">
				<form className="MovieForm">
					<label className="MovieForm__label">Title
						<input className="MovieForm__input" type="text" value={this.state.title} onChange={this.inputHandler} />
					</label>
					<label className="MovieForm__label">Description
						<textarea className="MovieForm__textarea" rows="8" value={this.state.descr} onChange={this.inputHandler}></textarea>
					</label>
					<button className="MovieForm__btn MovieForm__btn--save">save</button>
					<button className="MovieForm__btn MovieForm__btn--cancel" onClick={onClose}>cancel</button>
				</form>
			</div>
		);
	}
}
