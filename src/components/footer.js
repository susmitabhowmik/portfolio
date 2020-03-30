import React from "react";
import GithubSVG from "../images/github.svg";
import CodepenSVG from "../images/codepen.svg";
import LinkedInSVG from "../images/linkedin.svg";



const Footer = ({ siteTitle }) => (
    <footer>
        <div class="footer__contact">
            <p>Contact Me</p>
            <a class="footer__link" href="tel:917-342-5588">&#9743; 917-342-5588 </a>
            <br />
            <a class="footer__link" href="mailto:susmita.bhowmik516@gmail.com">&#x2709; susmita.bhowmik516@gmail.com </a>
        </div>
        <div class="footer__copywrite">
            Built by Susmita using
        {` `}
            <a href="https://www.gatsbyjs.org" class="footer__link">Gatsby</a>
            <a alt="GitHub profile" href="https://github.com/susmitabhowmik"><img class="footer__image" src={GithubSVG}></img></a>
            <a alt="Codepen profile" href="https://codepen.io/susmitabhowmik"><img class=" footer__image" src={CodepenSVG}></img></a>
            <a alt="GitHub profile" href="https://www.linkedin.com/in/susmita-bhowmik/"><img class="footer__image" src={LinkedInSVG}></img></a>
        </div>

    </footer >
)

export default Footer
