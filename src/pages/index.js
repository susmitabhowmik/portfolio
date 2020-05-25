import React from "react"
import SusmitaBitmoji from "../images/bitmoji_susmita.jpg"
import Susmita from "../images/susmita.jpg"
import GithubSVG from "../images/github.svg"
import CodepenSVG from "../images/codepen.svg"
import LinkedInSVG from "../images/linkedin.svg"
import MailSVG from "../images/mail.svg"
import DownloadSVG from "../images/download.svg"
import resume from "../files/Bhowmik_Susmita_Resume.pdf"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Susmita Bhowmik" />
    <div class="main-content">
      <div class="wrapper">
        <h2 class="homepage__header">About Me</h2>
        <p>
          Hey there! I'm Susmita. I am an educator turned software developer who
          is passionate about writing clean, modular, and accessible code. I
          love being able to utilize both logic and creativity to build and
          learn new things. While I am not tinkering with code, I enjoy playing
          board games, exploring new places, and discovering new foods.
        </p>
      </div>
    </div>
    <div class="wrapper">
      <h2 class="homepage__header">Let's connect!</h2>
      <div class="homepage__contact">
        <a href="https://github.com/susmitabhowmik">
          <img
            alt="gitHub profile link"
            class="homepage__image"
            src={GithubSVG}
          ></img>
        </a>
        <a alt="Codepen profile" href="https://codepen.io/susmitabhowmik">
          <img
            alt="codepen profile link"
            class=" homepage__image"
            src={CodepenSVG}
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/susmita-bhowmik/">
          <img
            alt="linkedin profile link"
            class="homepage__image"
            src={LinkedInSVG}
          ></img>
        </a>
      </div>

      <div>
        <a class="homepage__link" href="mailto:susmita.bhowmik516@gmail.com">
          <img alt="mail to" class=" homepage__image" src={MailSVG}></img>
          susmita.bhowmik516@gmail.com{" "}
        </a>
      </div>

      <div>
        <a
          href={resume}
          class="homepage__link"
          target="_blank"
          download="Bhowmik_Susmita_Resume"
        >
          <img alt="download" class=" homepage__image" src={DownloadSVG}></img>
          Download Resume
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
