import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./Banner.css";

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <Link to="/">
                    <div className="link-container">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span>Back to Catalog</span>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Banner
