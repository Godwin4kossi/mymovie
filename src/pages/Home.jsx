import MovieCard from "../components/MovieCard"
import { useState } from "react";
import "../css/Home.css"


function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", releaseDate: "2014"},
        {id: 2, title: "24 Hours", releaseDate: "2008"},
        {id: 3, title: "Nebula", releaseDate: "2021"},
        {id: 4, title: "Equalizer 3", releaseDate: "2024"},
    ]

    const handleSearch = ()  => {
        <e className="preventDefault"></e>
        alert(searchQuery)
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search Movies " className="search-form" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) =>( <MovieCard movie={movie} key={movie.id}/> ))} 
        </div>

    </div>
}

export default Home