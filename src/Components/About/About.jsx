import React from 'react'
import './about.css'
import Overklock from '../../img/Overklock.png'
import SocialFollow from "../SocialFollow/SocialFollow";

const about = () => {
    return (
        <div className="a">
            <div className="a-left">
               <div className="a-card">
               <img src={Overklock} alt="" className="a-img" />
               <div className="a-card bg">

               </div>
               </div>
            </div>
            <div className="a-right">
                <div className="a-about-ok">
                    About Overklock Studios
                </div>
                <div className="a-about-desc">
                Overklock Studios is my youtube channel where I post
                cinematic videos, vlogs, short films and tutorials 
                on film making which I recently started.
                </div>
                <SocialFollow />
            </div>
        </div>
    )
}

export default about
