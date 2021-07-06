import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Card } from "antd";
import { MOVIE } from "../../redux/types";
import { connect } from "react-redux";
const { Meta } = Card;

const TopRated = (props) => {

  let history = useHistory();

  const [moviesTopRate, setMoviesTopRate] = useState([]);

  
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  useEffect(() => {
    setTimeout(() => {
      findTopRated();
    }, 100);
  }, []);

  const findTopRated = async () => {
    try {
      let res = await axios.get(
        "https://blooper-movie-rental.herokuapp.com/movies/toprated"
      );
      setMoviesTopRate(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(setMoviesTopRate);

  const getInfo = (film) => {
    props.dispatch({ type: MOVIE, payload: film });
    console.log(film);

    history.push("/movie");
  }

  if (moviesTopRate === "") {
    return <div>Loading</div>;
  } else {
    return (
      <div>
          <h3 id="titleScroll">Top Rated Movies</h3>
   <div className="scrolling-wrapper">
     {moviesTopRate?.map((Top) => {
       return (
         <Card className="card" key={Top.id}cover={
             <img
               className="imgMovie"
               src={`${baseImgUrl}/${size}${Top.poster_path}`}
               alt="poster_path"
               onClick={()=> getInfo(Top)}
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

export default connect((state) => ({
  credentials: state.credentials,
  movie: state.credentials
}))(TopRated);
