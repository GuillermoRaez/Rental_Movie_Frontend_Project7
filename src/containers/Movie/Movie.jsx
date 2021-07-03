import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";


const Movie = (props) => {
    
      let history = useHistory();

      const baseImgUrl = "https://image.tmdb.org/t/p";
      const size = "w1280";
      const sizePoster = "w200";
    
      if (props.movie !== "") {
        {
          console.log(props.movie);
        }
        return (
          <div className="selectMovie">
            <img
              className="backdrop_path"
              src={`${baseImgUrl}/${size}${props.movie.backdrop_path}`}
              alt="backdrop_path"
            ></img>
            <div className="infoSelectMovie">
              <div className="imgPoster">
                <img
                  className="poster_path"
                  src={`${baseImgUrl}/${sizePoster}${props.movie.poster_path}`}
                  alt="backdrop_path"
                ></img>
              </div>
              <div className="infoPoster">
                <h2>
                  {props.movie.title}. ({props.movie.release_date})
                </h2>
                <div className="infoPoster2">
                  <h3>Original Title: {props.movie.original_title}</h3>
                </div>
                <div className="infoPoster3">
                  <h3>Synopsis: {props.movie.overview}</h3>
                </div>
                <div className="infoPoster4">
                  <h4>Rated {props.movie.vote_count}</h4>
                </div>
              </div>
              <div className="botonAlquiler" >
               
              </div>
            </div>
          </div>
        );
      } else {
          <div>Loading</div>
      }
    };
    
    export default connect((state) => ({
      credentials: state.credentials,
      movie: state.movie
    }))(Movie);
