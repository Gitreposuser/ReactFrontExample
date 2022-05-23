import React from 'react';
import styled from 'styled-components';
import Navigation from './../navigation/Navigation';

function Layout({children}) {
    return (
        <Container>
            <Navigation/>
            
            {children}
        </Container>
    );
}

export default Layout;

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 90vw;
    max-width: 1200px;
    background-color: pink;
`;