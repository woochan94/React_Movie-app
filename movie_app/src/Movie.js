import React, { Component } from 'react';
import './Movie.css'; 

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster/>
                <h1>hello this is a movie</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src="https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20190417_250%2F1555465284425i6WQE_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2"/>
        );
    }
}

export default Movie;