import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { MOVIE } from '../../redux/types';
import { Card } from "antd";
const { Meta } = Card;


const Search = (props) => {

    let history = useHistory()
 
    const [ searchMovie, setSearchMovie] = useState({
        movieTitle: ''
    });

    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        
    },[]);

    useEffect(() => {
        searchMovies ()
    });

    const updateSearch = (e) => {
        setSearchMovie({...searchMovie, [e.target.name]: e.target.value})
    }

    const searchMovies = async () => {
        let title = searchMovie.movieTitle;

        let res = await axios.get('http://localhost:3001/movies/search/'+title);

        setMovies(res.data.results)
    } 

    const movieInfo = (film) => {
        props.dispatch({ type: MOVIE, payload: film });

        history.push("/movie");
    }

    const baseImgUrl = "https://image.tmdb.org/t/p"
    const size = "w200"

    if (props.credentials?.user) {

        return(
            <div className="vistaSearch">
            <div className="searchBox">
                <div className="movieSearch">
                    <input type="text" name="movieTitle" id="" className="search" onChange={updateSearch} placeholder="Please enter a title"/>
                </div>
                <div className="searchContent">
                    <h3 id="titleScroll">Results</h3>
                        <div className="scrolling-wrapper">
                                {movies.map((film, index) => (
                                
                                    <Card className="card" key={index} onClick={() => movieInfo(film)}>
                                       <img className="imgMovie" src={`${baseImgUrl}/${size}${film.poster_path}`} alt="poster_path"/>
                                    </Card>

                                ))}
                        </div>
                </div>
            </div>
            </div>
        )

    } else {
        return (
            <div>You are not allowed</div>
        )
    }
}

export default connect((state) => ({
    credentials: state.credentials,
    movie: state.movie
  }))(Search);