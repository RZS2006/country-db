import React from 'react';

import Search from "./Search/Search";
import Catalog from "./Catalog/Catalog";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Search />
                <Catalog />
            </div>
        </div>
    )
}

export default Home
