import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import NavCompoent from '../components/Nav.jsx'
import ProjectsData from "../data/project.jsx"

const ProjectDetail = () => {
    const { id } = useParams();
    const [pro, setPro] = useState(null);

    useEffect(() =>{
        const project = ProjectsData.find((ele) => ele.id == id)
        //console.log(project)
        setPro(project)
        console.log(pro)
    })

    return (
        <>
            <NavCompoent />
            <section key={pro} className="singleProject">
                <h1 key={pro}>{pro.name}</h1>
                <img src={pro.image} alt={pro.name + " image"} key={pro}/>
                <h3 key={pro}>{pro.miniDescription}</h3>
                <p key={pro}>{pro.description}</p>
            </section>
        </>
    )
}

export default ProjectDetail