//#1 creamos componente Imput e importamos imput

import React,{useEffect, useState} from 'react';
import Card from "./Card"
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// import DataEntry from './DataEntry';

const StyledList = styled.div`
    display: grid;
    grid-row-gap: 2.3em; 
    background: var(--background);
    padding: 4em 2em;
    border: 1px solid red;
    &::-webkit-imput-placeholder{
      color: #C4C4C4;
    }
`; 

const List = () => {
/*   const [inputValue, setInputValue]=useState(""); */

  const countryListByName = useSelector((state) => state.countryListByName)

 /*  const filterByName = (e) =>{
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
  } */
  //----------------------------------------
  const dispatch = useDispatch()
 
//FILTRA POR CONTINENTE #5, leonidas mantiene esta version
  const countryList = useSelector((state) => {
    /*SOLUCION LEONIDAS LUEGO DE #9 CECHU, && agregada, para porder filtrar el nombre del pais incluido con la region seleccionada */
    if ('' !== state.filterByRegion && countryListByName.length===0) {
      return state.coutryFilteredByRegion;
    }

  //SOLUCION LEONIDAS, LUEGO DE #9 CECHU, para solamente usar countryList solamente siempre, sin hacer validaciones luego o usar algo externo como countryListByName 
  if(countryListByName.length>0)
  {
    return countryListByName
  }

    return state.countryList;
  }) 

//---------------------------------------------------
  //modularizar #1 action creator
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then((response)=>{
      return response.json() //PARSEAR JSON
    })
    .then((list)=>{      
          dispatch({type:"SET_COUNTRY_LIST", payload:list})
    })
     .catch(()=>{
       console.log("error en src/List.jsx al listar los paises de la API")
     }) 
  }, [dispatch])  


  const [inputValue, setInputValue]=useState("");

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
        <StyledList>
       
       {/* LINEA 96 NO FUNCIONA SI LA HABILITO */}
      {/*  <DataEntry placeholder="Search for a country..." value={inputValue} onChange={filterByName}/> */}

{/* LINEA 97 A 110 FUNCIONA SI LO HABILITO, pero no funciona si elijo por continente a la misma vez */}
    {/* <input type="text" value={inputValue} onChange={filterByName} />
      {
        inputValue &&
        <button onClick={clearInput}>X</button>
      }

      
      {
        countryListByName.length === 0 && inputValue &&
        <p>
          <strong>{inputValue}</strong> Not found in countries
        </p>
      } */}



        {          
            countryList.map(({flag, name, population, region, capital})=>{
            return(
              <Card
              key={name}
              flag={flag}
              name={name}
              population={population}
              region={region}
              capital={capital}
              />    
            )
          })  
        
        }

        </StyledList>
    )
};

export default List; 





