import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css/skyblue';
import styled from "styled-components";

const Wrapper = styled.div`
margin: 4rem 0rem;
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
    position: absolute;
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
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.7));
  z-index: 3;
`;

function Popular() {
  const [popular, setPopular] = useState([]);
  
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async() => {
    const check = localStorage.getItem('popular');

    if(check){
      setPopular(JSON.parse(check));
    } else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
      const data = await api.json();
      setPopular(data.recipes);
      localStorage.setItem('popular', JSON.stringify(data.recipes));
    }
  };

  return( 
    <>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={{
            perPage: 3,
            arrows: false,
            drag: 'free',
            wheelSleep: 100,
            wheel: true,
            gap: '3rem',
            breakpoints: {
              640: {
                perPage: 1
              }, 
              1024:{
                perPage: 2
              }
            },
            classes: {
              pagination: 'splide__pagination margin-t-pagination',
            }
          }}>
          {popular.map((recipe) => {
            return(
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                    <img src={recipe.image} alt={recipe.title} />
                    <p>{recipe.title}</p>
                    <Gradient/>
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </>
  );
}



export default Popular;