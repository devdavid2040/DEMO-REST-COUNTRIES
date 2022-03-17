import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Search from './Search';
import FilterRegion from './FilterRegion';


const StyledNavbar = styled.div`
    display:grid;
    grid-template-columns:1fr;
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <Wrapper>
                <Search/>
                <FilterRegion />
          </Wrapper>  
        </StyledNavbar>
    )
};

export default Navbar;