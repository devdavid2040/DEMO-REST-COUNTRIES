import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch } from 'react-redux';

const StyledSearch = styled.div`
    
`;

const Search = () => {

    const [inputValue, setInputValue]=useState("");
    const dispatch = useDispatch()

    const filterByName = (e) =>{
        setInputValue(e.target.value)
        dispatch({
          type: 'SET_COUNTRY_BY_NAME',
          payload: e.target.value
        })
      }
      const clearInput = () => {
        dispatch({
          type: 'SET_COUNTRY_BY_NAME',
          payload: ''
        })
        setInputValue('')
      }

    return (
        <StyledSearch>
    {
        inputValue &&
        <button onClick={clearInput}>X</button>
        
    }
   {/*  <input type="text"placeholder="Search for un country"/> */}


{/* //DEJO COMENTADO, Y FILTRAR POR REGION FUNCIONA */}
{/*    //FUNCIONA SOLAMENTE PARA LA BUSQUEDA POR NOMBRE, SIN SELECCIONAR EL CONTINENTE A LA MISMA VEZ COMO OPCION */}
          <input type="text"placeholder="Search for un country" value={inputValue} onChange={filterByName} />  
    

        </StyledSearch>
    )
};

export default Search;