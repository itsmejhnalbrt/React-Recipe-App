import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks, GiHouse } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  color: #FFF;
  transform: scale(0.8);
  transition: ease-in-out 250ms;
  z-index: 1;

  h4{
    color: #FFF;
    font-size: 0.8rem;
    z-index: 2;
  }

  svg{
    font-size: 1.5rem;
    z-index: 2;
  }

  &::after{
    content: "";
    display: block;
    position: absolute;
    height: 6rem;
    width: 6rem;
    color: black;
    border-radius: 50%;
    background: linear-gradient(to right, #f27121, #e94057);
    z-index: -1;
    opacity: 0;
    transition: ease-in-out 250ms;
  }

  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
  }

  &:hover:after{
    opacity: 1;
  }
`;

function Category() {
  return (
    <>
    <List>
      <Slink to={'/'}>
        <GiHouse />
        <h4>Home</h4>
      </Slink>
      <Slink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
    </>
  )
}

export default Category;