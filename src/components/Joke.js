import React from 'react';
import { useState, useEffect } from 'react';
import './Joke.css';

export const Joke = (props) => {

  let[joke, setJoke] = useState([]);
  useEffect(()=>{
    if(!navigator.onLine){
        if(localStorage.getItem("joke") === null) {
            setJoke("Loading...")
        } else {
            setJoke(localStorage.getItem("joke"));
        }
    } else {
        const URL = "https://api.chucknorris.io/jokes/random";
        fetch(URL).then(res=>res.json()).then(res=>{
            setJoke(res.value);
            localStorage.setItem("joke", res.value);
        })
    }
  }, []);
  return(
    <>
      <div className='Joke'>
        <p>{joke}</p>
      </div>
    </>
  )
}