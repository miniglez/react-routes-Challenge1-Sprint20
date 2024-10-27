import React from "react";
import NavCompoent from '../components/Nav.jsx'
import image from '../assets/images/myImage.jpeg'

const Home = () => {
    return (
        <>
            <NavCompoent />
            <section className="homedescription">
                <div className="nameandpro">
                    <h1>Iván González Gómez</h1>
                    <h2>Full stack developer</h2>
                </div>
                <div className="aboutme">
                    <img src={image} alt="personal image" />
                    <p>Desarrollador Full-stack con una sólida formación en diseño de videojuegos y experiencia en reparación de computadoras. Competente en tecnologías de frontend y backend, con un enfoque en la creación de aplicaciones web robustas y escalables.</p>
                </div>
            </section>
        </>
    )
};

export default Home;