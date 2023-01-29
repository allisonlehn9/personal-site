import React from "react"
import Project from './Project';
export default function Projects() {
    return (
      <div className="projects">
        <h2 className="section--header" id="projects">projects</h2>
        <div className="projects--gallery">
            <Project name="Colombia Digital History Lab" frame="1" path="Colombia-Digital-History-Lab"/>
            <Project name="RuPaul's Machine Learning Race" frame="2" path="RuPauls-Machine-Learning-Race"/>
            <Project name="Spotify Mapped" frame="3" path="Spotify-Mapped"/>
            <Project name="Digital Transgender Archive: Magazine Cover Viewer" frame="1" path="Magazine-Cover-Viewer"/>
        </div>
      </div>
    );
  }
