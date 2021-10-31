import React, { useState, useEffect } from 'react';
import './Marvel.css';
import { Card } from './Card';
import MD5 from "crypto-js/md5";

export const Marvel = (props) => {
  
  let [characters, setList] = useState([])
  useEffect(()=>{
    const apikey = '1c7a9e4a2748f6967e51d19d3d1ef04f';
    const ts = Date.now();
    const privateKey = '17416de9ff506a9afba0c9793913c18988b9897d';
    const hash = MD5(ts + privateKey + apikey);
    if(!navigator.onLine){
        if(localStorage.getItem('characters') === null) {
            setList(null);
        } else {
            setList(JSON.parse(localStorage.getItem('characters')));
        }
    } else {
    const URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;
    fetch(URL).then(res=>res.json()).then(res => 
      {
        setList(res.data.results);
        localStorage.setItem('characters', JSON.stringify(res.data.results));
      })
    }
  }, []); 

  return (
    <div className='marvel'>
      {characters.map((character) => (
        <Card 
          id={character.id}
          name={character.name}
          img={character.thumbnail.path + '/standard_xlarge.'+ character.thumbnail.extension}  
        />
      ))}
    </div>
  )
}