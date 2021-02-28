import { useEffect, useState } from "react";
import MovieCard from './Moviecard';
import DarkMode from "./DarkMode";
import './search.css'
import useDarkMode from "use-dark-mode";

function App({getId}) {

    const [items, setItems] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [resultItem, setResultItem] = useState([])
  
    useEffect(() => {
      fetch(`http://www.omdbapi.com/?s=${searchItem}&apikey=98950665`)
        .then(res => res.json())
        .then(
          (result) => {
            if(result.Search){
            setItems(result.Search);
            }
          }
        )
    }, [searchItem])
  return (
    <div className="App">
      <img src='https://m.media-amazon.com/images/M/MV5BNGU0YWEwOTUtOTFkOC00M2M2LTkwNTYtYmQ2ODhlNTYwMDIwXkEyXkFqcGdeQXVyMzYzOTYxNzM@._V1_SX300.jpg' height={30} width={30} className="imagePosition"/>
        <input
        id='auto'
        className="serch"
        placeholder="type your movie name"
        value = {searchItem}
        type='text'
        autoFocus
        lebel='toggle'
        onChange = {event=>setSearchItem(event.target.value)}
        onKeyPress = { (event) => {
            if (event.key === 'Enter') {
                setResultItem(items)
                setItems([])
                setSearchItem('')
            }
          }}
        /> <spna className='position'><DarkMode /></spna>
        <div className='listWraper'>
        {items.map((result)=>{return <p key={result.imdbID} className="lists">{result.Title}</p>})}
        <MovieCard 
          resultItem={resultItem} 
          getId={getId}
        />
        </div>
    </div>
  )
}

export default App