import MovieCard from './components/MovieCard'
import './App.css'

function App() {

  return (
    <>
    <MovieCard movie={{title: "Tims Film", release_date: "2024"}}/>
    <MovieCard movie={{title: "24 Hours", release_date: "2024"}}/>
    <MovieCard movie={{title: "Spliter Ce", release_date: "2024"}}/>
    </>
  );
}


export default App
