import React from 'react'
import './projects.css'
import Project from "./Project"
import { projects } from "../../datas";

export const Projects = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-desc">
                    Here are some of my projects on Web Development and Film Making
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default Projects