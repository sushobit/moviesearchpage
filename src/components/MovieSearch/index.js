import React, { useState } from 'react';
import MovieCard from '../MovieCard';
import "./index.css"

export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const apiKey = 'e8ccc676e299173067a80520c1fee405';
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results || []);
        } catch (err) {
            setError('Failed to fetch movies');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <h1 className="text">MOVIE NAME</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a movie..."
                    className='search'
                />
                <button className='button' type="submit">Search!</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="card-list">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}