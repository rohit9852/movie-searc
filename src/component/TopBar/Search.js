import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { useEffect, useState } from "react";
import MovieCard from './Moviecard';
import DarkMode from './DarkMode';

function App({getId}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [items, setItems] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [resultItem, setResultItem] = useState([])
  
    useEffect(() => {
      fetch(`http://www.omdbapi.com/?s=${searchItem}&apikey=98950665`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            if(result.Search){
            setItems(result.Search);
            }
          }
        )
    }, [searchItem])
  return (
    <div className="App">
        <input
        id='auto'
        placeholder="type your movie name"
        value = {searchItem}
        onChange = {event=>setSearchItem(event.target.value)}
        onKeyPress = { (event) => {
            if (event.key === 'Enter') {
                setResultItem(items)
                setItems([])
                setSearchItem('')
            }
          }}
        /> <DarkMode/>
        {items.map((result)=>{return <p key={result.imdbID}>{result.Title}</p>})}
        <MovieCard 
          resultItem={resultItem} 
          getId={getId}
        />
    </div>
  )
}

export default App