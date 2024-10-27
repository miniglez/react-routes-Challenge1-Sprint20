import React from "react"
import { Link } from "react-router-dom"
import LinkedIn from "../assets/svgLinkedIn.jsx"
import HomeSVG from "../assets/svgHome.jsx"
import GitHub from '../assets/svgGitHub.jsx'

const NavComponent = () => {
    return (
        <>
            <nav>
                <div>
                    <Link to={'/'}><HomeSVG /></Link>
                </div>
                <div>
                    <Link to={'/resume'}>Presentacion</Link>
                    <Link to={'/projects'}>Proyectos</Link>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/ivanglezgomez/"><LinkedIn /></a>
                    <a href="https://github.com/miniglez"><GitHub /></a>
                </div>
            </nav>
        </>
    )
}   

export default NavComponent