import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", releaseDate: "2014"},
        {id: 2, title: "24 Hours", releaseDate: "2008"},
        {id: 3, title: "Nebula", releaseDate: "2021"},
        {id: 4, title: "Equalizer 3", releaseDate: "2024"},
    ]

    return <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => ( <MovieCard movie={movie} key={movie.id}/> ))} 
        </div>

    </div>
}

export default Home