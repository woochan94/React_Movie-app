import React from 'react';
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import './Movie.css'; 

function Movie({ poster, title, genres, summary }) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} title={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Summary">
                    <LinesEllipsis
                        text={summary}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters' 
                    />
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, title}) {
    return (
        <img src={poster} alt={title} className="Movie__Poster"/>
    )
}

function MovieGenre({ genre }) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired, 
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired, 
    summary: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    title: PropTypes.string.isRequired, 
    poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;