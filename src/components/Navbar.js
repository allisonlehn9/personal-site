import React from "react"

export default function Navbar() {
    return (
      <div className="navbar">
            <h1 className="title">allison lehn: emotional coder</h1>
            <div className="navbar--menu">
                <a className="navbar--item" href="#intro">intro</a>
                <a className="navbar--item" href="#projects">projects</a>
                <a className="navbar--item" href="#contact">contact</a>
            </div>
        </div>
    );
  }