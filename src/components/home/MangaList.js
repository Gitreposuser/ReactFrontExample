import React from 'react';
import styled from 'styled-components';
import MangaItem from './MangaItem';

function MangaList({mangas}) {
    return (
        <Container>
            {
                mangas.map((manga, index) => 
                <MangaItem key={manga.id}
                    id={manga.id}
                    title={manga.title}
                    genre={manga.genre}
                    author={manga.author}
                />)
            }
        </Container>
    );
}

export default MangaList;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(300px, auto);
    background-color: burlywood;
    padding: 10px;
    width: 100%;
`