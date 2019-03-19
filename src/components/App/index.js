import React from 'react';
import Header from 'components/Header';
import MovieList from 'components/MovieList';
import MovieForm from 'components/MovieForm';

import movies from '../../fakeDataBase';
import './styles.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);

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
		console.log(id);
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
		const { isOpen, movieToEdit } = this.state;
		const editModal = isOpen ? 
			<MovieForm
				isOpen={isOpen}
				onSave={this.updateMovie}
				onClose={this.closeMovieHandler}
				movie={this.state.movies.find(movie => movie.id === this.state.movieToEdit)}
			/> 
			: null;
			
		return(
			<div className="AppWrapper">
				<div className="App">
					<Header/>
					<div className="App__body">
						<MovieList
							movies={this.state.movies}
							editMovie={this.openMovieHandler}
						/>
						{editModal}
					</div>
				</div>
			</div>
		);
	}
}
