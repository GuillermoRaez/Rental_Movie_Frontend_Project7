import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
const { Meta } = Card;

const Upcoming = (props) => {
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);

  
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  useEffect(() => {
    setTimeout(() => {
      findUpcoming();
    }, 500);
  }, []);

  const findUpcoming = async () => {
    try {
      let res = await axios.get(
        "http://localhost:3001/movies/upcoming"
      );
      setMoviesUpcoming(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(setMoviesUpcoming);

  if (moviesUpcoming === "") {
    return <div>Loading</div>;
  } else {
    return (
      <div>
          <h3 id="titleScroll">Upcoming Movies</h3>
   <div className="scrolling-wrapper">
     {moviesUpcoming?.map((Up) => {
       return (
         <Card className="card" key={Up.id}cover={
             <img
               className="imgMovie"
               src={`${baseImgUrl}/${size}${Up.poster_path}`}
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

export default Upcoming
