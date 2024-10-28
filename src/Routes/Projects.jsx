import React from "react";
import { Link } from "react-router-dom";
import NavCompoent from '../components/Nav.jsx'
import ProjectsData from '../data/project.jsx'

const Projects = () => {
    return (
        <>
            <NavCompoent />
            <section className="projectslist">
                <ul>
                {ProjectsData.map((project) => {
                        return (
                            <Link key={project.id} to={`/projects/${project.id}`}>
                                <li>
                                    <div>
                                        <h2>{project.name}</h2>
                                        <p>{project.miniDescription}</p>
                                    </div>   
                                    <img src={project.image} alt={project.name + " image"} />
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </section>
        </>
    )
};

export default Projects;