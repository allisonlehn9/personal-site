import React from "react"

import twitter from "../images/contact/twitter.svg"
import email from "../images/contact/email.svg"
import github from "../images/contact/github.svg"
import linkedin from "../images/contact/linkedin.svg"

export default function Contact() {
    return (
      <div className="contact">
        <h2 className="section--header" id="contact">contact</h2>
        <div className="contact--buttons">
            <a href="https://twitter.com/allisonlehn9" target="_blank" rel="noopener noreferrer">
                <button className="contact--button" type="button"><img src={twitter} alt="Twitter"/></button>
            </a>
            <a href="mailto: allison@uni.minerva.edu">
                <button className="contact--button" type="button"><img src={email} alt="Email"/></button>
            </a>
            <a href="https://www.linkedin.com/in/allison-lehn/" target="_blank" rel="noopener noreferrer">
                <button className="contact--button" type="button"><img src={linkedin} alt="LinkedIn"/></button>
            </a>
            <a href="https://github.com/allisonlehn9" target="_blank" rel="noopener noreferrer">
                <button className="contact--button" type="button"><img src={github} alt="Github"/></button>
            </a>
        </div>
      </div>
    );
  }
  