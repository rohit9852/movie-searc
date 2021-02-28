import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from "react";
import { Link} from 'react-router-dom';
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
    return (<>
        {arr[0].map((result)=>{return <Link to='/home/id' key={result.imdbID} onClick={handleOnclick}>
            <img src={result.Poster}/>
            <p onClick={handleOnclick}>{result.Title}</p>
        </Link >
        })}
    </>
    )
}

export default MovieCard;