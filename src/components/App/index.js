import React, { Component } from 'react';
import Header from 'components/Header';
import MovieList from 'components/MovieList';
import MovieForm from 'components/MovieForm';
import movies from '../../fakeDataBase';
import './styles.css';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			isOpen: false,
			movieToEdit: null,
			movies: movies,
		}

		this.openMovieHandler = this.openMovieHandler.bind(this);
		this.closeMovieHandler = this.closeMovieHandler.bind(this);
		this.updateMovie = this.updateMovie.bind(this);
	}

	openMovieHandler(id) {
    this.setState({
      isOpen:true,
      movieToEdit: id,
    })
	}

	closeMovieHandler() {
		this.setState({
			isOpen: false,
		});
	}

	updateMovie(e, movie) {
		e.preventDefault();
    const movies = [...this.state.movies];
		const movieToUpdate = movies.findIndex(m => m.id === movie.id);
		movies[movieToUpdate] = movie;
		this.setState({movies:movies, isOpen: false});
	}

	render() {
		const { movies, isOpen, movieToEdit } = this.state;
		const findEl = movies.find(movie => movie.id === movieToEdit)
		const EditForm = isOpen &&
			<MovieForm
				isOpen={isOpen}
				onSave={this.updateMovie}
				onClose={this.closeMovieHandler}
				movie={findEl}
			/> 
			
		return(
			<div className="AppWrapper">
				<div className="App">
					<Header/>
					<div className="App__body">
						<MovieList
							movies={movies}
							editMovie={this.openMovieHandler}
						/>
						{EditForm}
					</div>
				</div>
			</div>
		);
	}
}
