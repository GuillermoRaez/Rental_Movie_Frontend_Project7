import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
const { Meta } = Card;

const TopRated = (props) => {
  const [moviesTopRate, setMoviesTopRate] = useState([]);

  
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  useEffect(() => {
    setTimeout(() => {
      findTopRated();
    }, 500);
  }, []);

  const findTopRated = async () => {
    try {
      let res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1"
      );
      setMoviesTopRate(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(setMoviesTopRate);

  if (moviesTopRate === "") {
    return <div>cargando</div>;
  } else {
    return (
      <div className="vistaHome">
      <div className="tarjeta">
      {moviesTopRate.map((movie, index) => (
     
      <div key={index} className="appointmentCard1">

      <img src={`${baseImgUrl}/${size}${movie.poster_path}`}  alt="poster"/>

      <p> Movie: {movie.title} </p>
      <p> Rated : {movie.vote_average} </p>
      <p> Id : {movie.id} </p>
      </div>
      ))}
      </div>
  </div>
)
}
}

export default TopRated;
