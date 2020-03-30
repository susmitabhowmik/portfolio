import React from "react";
import GithubImage from "../images/github.svg";

const Footer = ({ siteTitle }) => (
    <footer>
        <div class="footer__contact">
            <p>Contact Me</p>
            <a class="footer__link" href="tel:917-342-5588">&#9743; 917-342-5588 </a>
            <br />
            <a class="footer__link" href="mailto:susmita.bhowmik516@gmail.com">&#x2709; susmita.bhowmik516@gmail.com </a>
        </div>
        <div class="footer__copywrite">
            © Susmita 2020, Built with
        {` `}
            <a href="https://www.gatsbyjs.org" class="footer__link">Gatsby</a>
            <a alt="GitHub profile" href="https://github.com/susmitabhowmik"><img class="footer__image" src={GithubImage}></img></a>
        </div>

    </footer >
)

export default Footer
