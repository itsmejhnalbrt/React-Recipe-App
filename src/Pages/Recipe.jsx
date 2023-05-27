import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const params = useParams();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    //getRecipe();
  },[]);

  const getRecipe = async(e) => {
    const check = localStorage.getItem('testRecipe');

    if(check){
      setRecipe(JSON.parse(check));
    } else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
      const data = await api.json();

      setRecipe(data);
      console.log(data);

      localStorage.setItem('testRecipe', JSON.stringify(data));
    }
  };

 return (
    <div>
      <p>{params.recipe}</p> 
    </div>
  )
}

export default Recipe;