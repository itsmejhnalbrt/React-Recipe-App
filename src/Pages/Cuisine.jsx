import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Recipe from './Recipe';

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
gap: 3rem;
`;

const Card = styled.div`
position: relative;
min-height: 15rem;
border-radius: 2rem;
overflow: hidden;
  :hover{
    cursor: pointer;
  }

  :hover{
    img{
      scale: 1.1;
    }
  }

img{
  position: absoulute;
  border-radius: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ease-in-out 250ms;
}

p{
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, 0%);
  color: #FFF;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`;

const Gradient = styled.div`
position: absolute;
top: 0;
height: 100%;
width: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
z-index: 3;
`;

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const check = localStorage.getItem(params.type);

    if(check){
      setCuisine(JSON.parse(check));
    } else{
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
      const data = await api.json();
      setCuisine(data);
      localStorage.setItem(params.type, JSON.stringify(data.results));
      console.log(data);
    }
  };

  useEffect(()=>{
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div>
      <h3 className='recipe__title'>{params.type} Cuisines</h3>
      <Grid>
        {cuisine.map((recipe) => {
          return(
            <>
            <Card key={recipe.id}>
              <Link to={'/recipe/' + recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
                <Gradient/>
              </Link>
            </Card>
            </>
          );
        })}
      </Grid>
    </div>
  );
}

export default Cuisine;