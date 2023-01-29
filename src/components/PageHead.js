import React from "react";
import logo from "../images/navbar/yarn3.svg"

export default function PageHead(page) {
    return (
        <div className="pagehead">
            <a href="/#projects">
                <button className="pagehead--logo"><img src={logo} alt="Home"/></button>
            </a>
            <h1 className="pagehead--title">{page.name}</h1>
        </div>
    )
}