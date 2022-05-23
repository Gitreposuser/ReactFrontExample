import React from 'react';
import styled from 'styled-components';

function Navigation(props) {
    return (
        <Container>
            <Logo>
                <img src="/images/logo/Manga.svg" placeholder='no image'/>
                Logo
            </Logo>
            <EmptySpace>
                EmptySpace
            </EmptySpace>
            <NavItems>
                NavItems
            </NavItems>
        </Container>
    );
}

export default Navigation;

const Container = styled.div`
    display: flex;
    background-color: orange;
    height: 150px;
    width: 100%;
`;

const Logo = styled.div`
    background-color: wheat;
    height: 100%;
    width: 200px;
    img{
        width: 100%; 
        height: 100%;
    }
`;

const EmptySpace = styled.div`
    background-color: #dac1e3;
    height: 100%;  
    width: 100%;      
`;

const NavItems = styled.div`
    background-color: #b8d4bf;
    height: 100%;  
    width: 300px;
`;