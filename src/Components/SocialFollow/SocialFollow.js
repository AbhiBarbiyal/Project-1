import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import './socialfollow.css'

export default function SocialFollow() {
  return (
      <div class="social-container">
        
        <a
          href="https://www.youtube.com/channel/UCwQFiOn2RmulepDejxNt0lQ/videos"
          className="youtube"
        >
        
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <p className="s-text">/OverklockStudios</p>
        <a
          href="https://www.facebook.com/abhi.barbiyal"
          className="facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <p className="s-text">/AbhiBarbiyal</p>
        <a
          href="https://www.linkedin.com/in/abhi-barbiyal-8969431b6/"
          className="linkdin"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <p className="s-text">/AbhiBarbiyal</p>
        <a
          href="https://www.instagram.com/learnbuildteach"
          className="instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <p className="s-text">/AbhiBarbiyal</p>
      </div>
  )
}
