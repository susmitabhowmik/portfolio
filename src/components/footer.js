import React from "react";
import GithubSVG from "../images/github.svg";
import CodepenSVG from "../images/codepen.svg";
import LinkedInSVG from "../images/linkedin.svg";



const Footer = ({ siteTitle }) => (
  <footer>
    <div class="footer__contact">
      <p>Contact</p>
      <a href="https://github.com/susmitabhowmik">
        <img alt="gitHub profile link" class="footer__image" src={GithubSVG}></img>
      </a>
      <a alt="Codepen profile" href="https://codepen.io/susmitabhowmik">
        <img alt="codepen profile link" class=" footer__image" src={CodepenSVG}></img>
      </a>
      <a href="https://www.linkedin.com/in/susmita-bhowmik/">
        <img alt="linkedin profile link" class="footer__image" src={LinkedInSVG}></img>
      </a>
      <br />
      <a class="footer__link" href="mailto:susmita.bhowmik516@gmail.com">&#x2709; susmita.bhowmik516@gmail.com </a>
    </div>
    <div class="footer__copywrite">
      Built by Susmita using
        {` `}
      <a href="https://www.gatsbyjs.org" class="footer__link">Gatsby</a>

    </div>

  </footer >
)

export default Footer
