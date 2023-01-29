import React from "react";

export default function PageHead(page) {
    return (
        <div className="pagehead">
            <a href="/#projects">
                <button className="pagehead--logo"></button>
                {/* <img src={logo} alt="Home"/> */}
            </a>
            <h1 className="pagehead--title">{page.name}</h1>
        </div>
    )
}