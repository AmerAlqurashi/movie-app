import React, {useEffect, useState} from 'react'
import Movies from './components/movies'

const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const API_img = "https://image.tmdb.org/t/p/w1280" 
const API_search = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="



const App = () => {

  const [movies, setMovies] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {

   fetch(API).then(res => res.json())
   .then(data => {
    setMovies(data.results)
   })
    }, [])
 //console.log(name)
  //const array = [1, 2, 3]
  // movies.length > 0 &&

const handleSubmit = (e) => {
  e.preventDefault();
  setName("")

   fetch(API_search+name)
  .then(res => res.json())
  .then(data => {
   setMovies(data.results)
  })
}
const Name = (e) => {
  setName(e.target.value)

}

  return (
    <div>
        <header className="searchBar">
          <form onSubmit={handleSubmit}>

             <input 
             className="search" 
             type="search" 
             placeholder="search..." 
             value={name} 
             onChange={Name} 
             />
          </form>
       
      </header>
    <div className="M-container">
     
     {movies.map(movie => (
        <Movies key={movie.id} {...movie} />
     ))}
    </div>
    </div>
   
  )
}

export default App
