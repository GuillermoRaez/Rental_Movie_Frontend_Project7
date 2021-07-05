import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const MovieDtl = (props) => {
    
      let history = useHistory();

      // const [orderMovie, setOrderMovie] = useState('');

      // useEffect(() => {

      // })


      const baseImgUrl = "https://image.tmdb.org/t/p";
      const size = "w1280";
      const sizePoster = "w200";

      const Rent = async () => {

        try {

           let token = props.credentials?.token;
           let user = props.credentials?.user;
   
           let body = {
               userId : user.id,
               movieId : props.movie?.id,
               movieTitle: props.movie?.title,
               moviePoster : props.movie?.poster_path,
           }

           await axios.post("http://localhost:3001/orders/create", body, {
           headers: { authorization: "Bearer " + token }
           });

           setTimeout(() => {
             history.push("/myorder")
           }, 500)

          } catch (err) {
              console.log(err)
          }
      };
    
      if (props.movie !== "") {
        {
          console.log(props.movie);
        }
        return (
          <div className="moviePage">
            <div className="movieInfo">
              <div className="imgPoster">
                <img className="poster_path" src={`${baseImgUrl}/${sizePoster}${props.movie.poster_path}`} alt="backdrop_path"></img>
              </div>
              <div className="infoPoster">
                <h2 className="title">{props.movie.title}</h2>
                <h3>{moment(props.movie.release_date).format("LL")}</h3>
                <div className="infoPoster2">
                  <h3>Original Title: {props.movie.original_title}</h3>
                </div>
                <div className="infoPoster3">
                  <h3>Synopsis: {props.movie.overview}</h3>
                </div>
                <div className="infoPoster4">
                  <h4>{props.movie.vote_average} <FontAwesomeIcon className="iconMenuLateral" icon={faStar}/></h4>
                </div>
              </div>
              <div className="rent" onClick={() => Rent(props.movie)}>Rent</div>
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
    }))(MovieDtl);
