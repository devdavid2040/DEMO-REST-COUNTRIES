import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import Country from './Country'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from './Wrapper'

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
`

function CountryList() {
  const dispatch = useDispatch()

  const countryListByName = useSelector((state) => state.countryListByName)

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) {
      return state.coutryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName
    }

    return state.countryList;
  })

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => {
        return response.json()
      })
      .then((list) => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list
        })
        console.log('el estado total de mi app es', countryList)
      })
      .catch(() => {
        console.log('hubo un error, que dolor que dolor que pena')
      })
  }, [])

  return (
    <Wrapper>
      <CountryListStyled>
        {
          countryList.map(({ name, flag, population, capital, region, nativeName, cioc, alpha2Code }) => {
            return (
              <Country
                flag={flag}
                name={name}
                key={name}
                population={population}
                region={region}
                capital={capital}
                nativeName={nativeName}
               /*  cioc={cioc} */
                alpha2Code={alpha2Code}
              />
            )
          })
        }
      </CountryListStyled>
    </Wrapper>
  )
}

export default CountryList
