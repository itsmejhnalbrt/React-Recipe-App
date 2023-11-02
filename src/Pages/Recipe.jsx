import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const RecipeDetails = styled.section`
display: flex;
`;

function Recipe() {
  const params = useParams(); 
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    getRecipe();
  }, [params.id]);

  const getRecipe = async(e) => {
    const check = localStorage.getItem('testRecipe');

    if(check){
      setRecipe(JSON.parse(check));
      console.log('true'); // TODO: remove when polishing\
    } else{
      const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
      const data = await api.json();
      setRecipe(data);
      localStorage.setItem('testRecipe', JSON.stringify(data)); // TODO: remove every isntance for searched data
    }
  };
  
  console.log(recipe);

  return (
    <>
      <RecipeDetails>
        <div>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt="" />
        </div>
        <div>
          <button>Instructions</button>
          <button>Ingerdients</button>
        </div>
      </RecipeDetails>
    </>
  );
}

export default Recipe;