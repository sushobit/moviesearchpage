import React from 'react';
import "./index.css"

export default function movieCard({ movie, history }) {
    const description =
        movie.overview.substring(0, 1000) +
        (movie.overview.length > 1000 ? '...' : ''); 

    const showMovieDetails = () => {
        console.log('show moviee details');
    };
    return (
        <div className="card" onClick={showMovieDetails}>
            <div className="individual-card">
                <img
                    className="card-image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + ' poster image'}
                />
                <div className="card-content">
                    <h3 className="card-title">{movie.full_name || movie.title}</h3>
                    <p>RELEASE DATE: {movie.release_date}</p> 
                    <p>RATING: {movie.vote_average}</p>
                    <p className="card-desc">{description}</p>   
                </div>
            </div>
        </div>
    );
}