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
    }, 250);
  }, []);

  const findTopRated = async () => {
    try {
      let res = await axios.get(
        "http://localhost:3001/movies/toprated"
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
      <div>
          <h3 id="titleScroll">Top Rated Movies</h3>
   <div className="scrolling-wrapper">
     {moviesTopRate?.map((Pop) => {
       return (
         <Card className="card" key={Pop.id}cover={
             <img
               className="imgMovie"
               src={`${baseImgUrl}/${size}${Pop.poster_path}`}
               alt="poster_path"
             />
           }
         >
         </Card>
       );
     })}
   </div>
   </div>
 );
}
};

export default TopRated;
