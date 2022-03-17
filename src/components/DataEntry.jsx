/* imsr */

/* import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.div`

`;

const Imput = () => {
    return (
        <StyledSearch>
            <imput type="text"/>
        </StyledSearch>
    )
};

export default Imput;

 */

//-----------------------
//agregarmos props
import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.label`
display:inline-flex;
background: white;
align-items:center;
imput{
    width:100%;
    border-radius:5px;
    border: none;
    height: 48px;
    box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
    } 
`;



const EntryData = ({...props}) => {
    return (
        <StyledSearch>
            <imput type="text" {...props}/>
        </StyledSearch>
    )
};

export default EntryData;

