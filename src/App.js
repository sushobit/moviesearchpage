import React from 'react';
import './App.css';
import SearchMovies from './components/MovieSearch';

function App() {
    return (
        <div className="App">
            <div className="container">       
                <SearchMovies />
            </div>
        </div>
    );
}

export default App;