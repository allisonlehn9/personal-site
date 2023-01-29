import React from "react"

export default function Project(project) {
    return (
        <a className="project" href={project.path}>
            <div className={"project--frame"+project.frame} >
                {project.name}
            </div>
        </a>  
    )
}