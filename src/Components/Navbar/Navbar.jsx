import React from 'react'
import './navbar.css'
import About from '../../icons/about.png'
import Contact from '../../icons/contact.png'
import Projects from '../../icons/projects.png'

export const Navbar = () => {

    const goToAbout = () => {
        window.scrollTo({
            top: 810,
            behavior: "smooth",
        });
    }
    const goToProjects = () => {
        window.scrollTo({
            top: 1650,
            behavior: "smooth",
        });
    }
    const goToContact = () => {
        window.scrollTo({
            top: 2600,
            behavior: "smooth",
        });
    }
    return (
        <div className='n-main'>
            <div className="n-nav">
                <h1 className='n-heading'>Abhi's Memento</h1>
                <div className='n-content'>
                    <button onClick={goToAbout} className='n-content-button'>About</button>
                    <img className='n-image' src={About} />
                    <button onClick={goToProjects} className='n-content-button'>Projects</button>
                    <img className='n-image' src={Projects} />
                    <button onClick={goToContact} className='n-content-button'>Contact</button>
                    <img className='n-image' src={Contact} />
                </div>
            </div>
        </div>

    )
}
