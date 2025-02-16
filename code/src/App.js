import './App.css';
import React ,{ useState } from 'react';
import {fetchWeather} from "./api/FetchWeather"
function App() {
  const [query, setQuery]= useState('')

  const search =async(e) =>{
    if(e.key === "Enter"){
      const data = await fetchWeather(query)
      console.log(data)
    }
  }


  return (
    <div className="main-container">
      <input
      type='text'
      className='search'
      placeholder='search...'
      value={query}
      onChange={(e)=> setQuery(e.target.value)}
      onKeyPress= {search}
      >
      </input>
    </div>
  );
}

export default App;
