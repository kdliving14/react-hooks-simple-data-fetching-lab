// create your App component here
import React from 'react'
import {useEffect} from "react";
import {useState} from "react";

const App = () => {
  
  const [dogURL, setDogURL] = useState("")

  useEffect(() => 
	{
	    fetch("https://dog.ceo/api/breeds/image/random")
	      .then((data) => data.json())
	      .then((data) => {setDogURL(data.message);});
  }, []);

  if(!dogURL) return <p>Loading...</p>
  
  return <img src={dogURL} alt="A Random Dog"/>
}

export default App