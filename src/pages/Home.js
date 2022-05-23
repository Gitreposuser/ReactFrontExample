import React, { useEffect, useState } from 'react';
import MangaList from './../components/home/MangaList';
import { mangaDb } from './../source/mangaDb';

function Home(props) {

    const [mangas, setMangas] = useState([]);
    useEffect( () => {
        setMangas(mangaDb);
    }, []);

    return (
        <div>
            Home page
            <MangaList mangas={mangas}/>
        </div>
    );
}

export default Home;