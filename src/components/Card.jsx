import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    width    : 264px; 
    border: 1px solid red;
    text-align: left;
    border-radius: 5px;
     overflow: hidden;
    box-shadow: 0 0 7px 2px rgba(0,0,0,.03);

    img{
        width: 100%;
        height: 160px;
        object-fit: cover;
    }

    .details{
        padding: 1.5em;
    }

    h2{
        margin: 0;
        margin-bottom: 1rem;
        font-size: 18px;
        font-weight: 700;
    }
    p{
        font-size: .9em;
        margin-bottom: .5rem;
    }
`; 

 const Card = ( {flag, name, population, region, capital} ) => {
    return (
        <StyledCard>
            <h2>{name}</h2>
            <img src={flag} alt=""/>
            <p><strong>Population: </strong>{population}</p>
            <p><strong>Region: </strong>{region}</p>
            <p><strong>Capital: </strong>{capital}</p>
        </StyledCard>
    )
};

export default Card;   