import React from 'react';
import styled from 'styled-components';

function MangaItem({id, title, genre, author}) {
    return (
        <Container>
            <img src='/images/NoImage.jpg' placeholder='No Image'/>
            <h2>{title}</h2>
            <h4>genre: {genre}</h4>
            <p>author: {author}</p>
        </Container>
    );
}

export default MangaItem;

const Container = styled.div`
    width: 30%;
    height: 150px;
    min-width: 200px;
    background-color: cadetblue;
    img {
        width: 200px;
        height: 200px;
    }
`