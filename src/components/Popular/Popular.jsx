import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Card } from "antd";
import { MOVIE } from "../../redux/types";
const { Meta } = Card;


const Popular = (props) => {

  let history = useHistory();

  const [moviesPopular, setMoviesPopular] = useState([]);

  
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  useEffect(() => {
    setTimeout(() => {
      findPopular();
    }, 500);
  }, []);

  const findPopular = async () => {
    try {
      let res = await axios.get(
        "http://localhost:3001/movies/popular"
      );
      setMoviesPopular(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(setMoviesPopular);

  const getFilmInfo = (film) => {
    props.dispatch({ type: MOVIE, payload: film });

    history.push("/movieInfo");
  }

  if (moviesPopular === "") {
    return <div>Loading</div>;
  } else {
    return (
         <div>
             <h3 id="titleScroll">Popular Movies</h3>
      <div className="scrolling-wrapper">
        {moviesPopular?.map((Pop) => {
          return (
            <Card className="card" key={Pop.id}cover={
                <img
                  className="imgMovie"
                  src={`${baseImgUrl}/${size}${Pop.poster_path}`}
                  alt="poster_path"
                  onClick={getFilmInfo}
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

export default Popular