import './MovieDetails.css'
import { useEffect, useState } from "react";
import TopHeader from './Search';
function MovieDeatils() {

   const [details, setDetails] = useState([])
    const id = localStorage.getItem('myData');
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=98950665`)
          .then(res => res.json())
          .then(
            (result) => {
               setDetails(result);
            }
          )
    }, [id])
   const  {Title,Year, Poster, Runtime, imdbRating, Director, Country, Plot} = details
    return(<>
        <TopHeader/>
        <div className="detailsWrapper">
            <img src={Poster}/>
            <div className={'details'}>
                <h3>{Title} [{Year}]</h3>
                <h4>{Runtime}</h4>
                <h4>{imdbRating}</h4>
                <h4>{Director}</h4>
                <h4>{Country}</h4>
                <p className={'plot'}>{Plot}</p>
            </div>
        </div>
        </>
    )
    
}
export default MovieDeatils;