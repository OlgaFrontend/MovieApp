import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class MovieForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: props.movie.title,
			descr: props.movie.descr,
			id: props.movie.id
		}
	}

	inputHandler =(e) => {
		const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
	}

	render() {
		const { onSave, onClose } = this.props;
		const { title, descr } = this.state;
	
		return(
			<div className="MovieFormWrapper">
				<form className="MovieForm">
					<label className="MovieForm__label">Title
						<input
							className="MovieForm__input"
							type="text"
							value={title}
							name="title"
							onChange={this.inputHandler} />
					</label>
					<label className="MovieForm__label">Description
						<textarea
							className="MovieForm__textarea"
							rows="8"
							value={descr}
							name="descr"
							onChange={this.inputHandler}>
						</textarea>
					</label>
					<button className="MovieForm__btn MovieForm__btn--save" onClick={(e)=>onSave(e, this.state)}>save</button>
					<button className="MovieForm__btn MovieForm__btn--cancel" onClick={onClose}>cancel</button>
				</form>
			</div>
		);
	}
}

MovieForm.propTypes = {
	onSave: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
}
