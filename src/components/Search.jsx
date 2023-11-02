import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
import './Search.css';

// const SForm = styled.form`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     align-content: center;

//     div{
//         position: relative;
//         width: min(100% - 4rem, 600px);
//         min-width: 15rem;
//         margin: 1rem 1rem;
//     }
    
//     input{
//         width: 100%;
//         background: linear-gradient(35deg, #494949, #313131);
//         padding: .5rem 3rem;
//         border: none;
//         border-radius: 1rem;
//         font-size: 1.1rem;
//         color: #FFF;
//         outline: none;
//     }

//     svg{
//         position: absolute;
//         top: 50%;
//         left: 0%;
//         transform: translate(100%, -50%);
//         color: #FFF;
//     }
// `;

function Search() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const searchInput = (e) => {
        setSearch(e.target.value);
    };

    const submitHandler = (e) => { 
        if(search.trim() === ''){
            navigate('/');
        }
        else{
            navigate('/searched/' + search);
        }
        e.preventDefault();
    }; 

  return (
    // <SForm onSubmit={submitHandler}>
    //     <div>
    //         <FaSearch></FaSearch>
    //         <input onChange = {searchInput} type="text" value={search}/>
    //     </div>
    // </SForm>

    <form className='form1' onSubmit={submitHandler}>
        <div className='div1'>
            <FaSearch className='svg1'></FaSearch>
            <input className="input1" onChange = {searchInput} type="text" value={search}/>
        </div>
    </form>
  )
}

export default Search;