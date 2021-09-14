import React from 'react'
const API_img = "https://image.tmdb.org/t/p/w1280" 
const Movies = ({ title, poster_path, vote_average, overview }) => {

    const changeRate = (vote) => {
    if (vote >= 8 ) {
        return "green"
    }else if (vote >= 6) {
        return "orange"
    }else {
        return "red"
    }
}
    return (
        <div className="movie">
           <img src={API_img + poster_path} alt={title} />
           <div className="movie-info">
               <h3>{title}</h3>
               <span className={`tag ${changeRate(vote_average)}`}>{vote_average}</span>
           </div>
           <div className="movie-hover">
               <h2>overview:</h2>
               <p>{overview}</p>
           </div>
        </div>
    )
}

export default Movies
