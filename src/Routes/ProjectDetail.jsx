import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import NavCompoent from '../components/Nav.jsx'
import ProjectsData from "../data/project.jsx"
import SvgLink from "../assets/svgLink.jsx";

const ProjectDetail = () => {
    const { id } = useParams();
    const [pro, setPro] = useState({name: null, image: null, miniDescription: null, description:null, url: null});

    useEffect(() =>{
        const project = ProjectsData.find((ele) => ele.id == id)
        setPro(project)

    }, [id])

    return (
        <>
            <NavCompoent />
            <section className="singleProject">
                <h1>{pro.name}</h1>
                <article>
                    <img src={pro.image} alt={pro.name + " image"} />
                    <div>
                        <h3>{pro.miniDescription}</h3>
                        <p>{pro.description}</p>
                        <a href={pro.url}><SvgLink /></a>
                    </div>
                </article>
            </section>
        </>
    )
}

export default ProjectDetail