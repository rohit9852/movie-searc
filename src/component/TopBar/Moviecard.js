import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from "react";
import { Link} from 'react-router-dom';
import './MovieCard.css'
function MovieCard(items) {
    let arr = []
    arr.push(items.resultItem);
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=tt0371746&apikey=98950665`)
          .then(res => res.json())
          .then(
            (result) => {
               setDetails(result);
            }
          )
    }, [])


    function handleOnclick(e) {
        arr[0].map(details=>{
        if(e.target.currentSrc == details.Poster) {
            localStorage.setItem('myData', details.imdbID);
        }})
        
    }
    return (<div className={'movieCard'}>
        {arr[0].map((result)=>{return <Link to={`/home/id`}key={result.imdbID} onClick={handleOnclick} className="card">
            <img src={result.Poster} alt='picture doent have'/>
            <p onClick={handleOnclick}>{result.Title}</p>
        </Link >
        })}
    </div>
    )
}

export default MovieCard;