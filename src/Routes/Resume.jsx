import React from "react";
import NavCompoent from '../components/Nav.jsx'
import { studies, experiences } from '../data/resume.jsx'

const Resume = () => {
    return (
        <>
            <NavCompoent />
            <section className="listPresentation">
                <div>
                    <h2>Estudios</h2>
                    <ul>
                        {studies.map(ele => {
                            return (
                                <li key={ele.id}>
                                    <h3>{ele.title}</h3>
                                    <span>{ele.date}</span>
                                    <p>{ele.institution}</p>
                                </li>
                            )
                        })}
                    </ul>

                </div>
                <div>
                    <h2>Experiencia laboral</h2>
                    <ul>
                        {experiences.map(ele => {
                            return (
                                <li key={ele.id}>
                                    <h3>{ele.title}</h3>
                                    <span>{ele.date}</span>
                                    <p>{ele.institution}</p>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </section>
        </>
    )
};

export default Resume;