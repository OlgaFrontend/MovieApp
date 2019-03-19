import React from 'react';

import './styles.css';

export default class MovieForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: props.movie.title,
			descr: props.movie.descr,
			id: props.movie.id
		}

		this.inputHandler = this.inputHandler.bind(this);
	}

	inputHandler =(e) => {
		console.log(e.target.name);
		this.setState({
			title: e.target.value,
		})
	}

	render() {
		console.log(this.state);
		const { onSave, onClose } = this.props;
		const { title, descr } = this.state;

		return(
			<div className="MovieFormWrapper">
				<form className="MovieForm">
					<label className="MovieForm__label">Title
						<input className="MovieForm__input" type="text" value={this.state.title} name={title} onChange={this.inputHandler} />
					</label>
					<label className="MovieForm__label">Description
						<textarea className="MovieForm__textarea" rows="8" value={this.state.descr} name={descr} onChange={this.inputHandler}></textarea>
					</label>
					<button className="MovieForm__btn MovieForm__btn--save" onClick={onSave}>save</button>
					<button className="MovieForm__btn MovieForm__btn--cancel" onClick={onClose}>cancel</button>
				</form>
			</div>
		);
	}
}
