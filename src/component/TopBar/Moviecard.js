import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from "react";
import { Link} from 'react-router-dom';
import './MovieCard.css'
function MovieCard(items, getId) {
    let arr = []
    arr.push(items.resultItem);
    const [details, setDetails] = useState([])
    const [id, setId] = useState('')

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
            setId(details.imdbID)
        }})
        // TODO:
        // getId(id);
    }
    return (<div className={'movieCard'}>
        {arr[0].map((result)=>{return <Link to='/home/id' key={result.imdbID} onClick={handleOnclick} className="card">
            <img src={result.Poster?result.Poster:"https://m.media-amazon.com/images/M/MV5BNGU0YWEwOTUtOTFkOC00M2M2LTkwNTYtYmQ2ODhlNTYwMDIwXkEyXkFqcGdeQXVyMzYzOTYxNzM@._V1_SX300.jpg"} alt='picture doent have'/>
            <p onClick={handleOnclick}>{result.Title}</p>
        </Link >
        })}
    </div>
    )
}

export default MovieCard;