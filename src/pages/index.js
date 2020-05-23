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
    <div class="wrapper">
      <div class="flip-box">
        <div class="flip-box--inner">
          <div class="flip-box--front">
            <img
              class="flip-box--img"
              src={SusmitaBitmoji}
              alt="cartoon picuture of me"
            ></img>
          </div>
          <div class="flip-box--back">
            <img class="flip-box__img" src={Susmita} alt="picuture of me"></img>
          </div>
        </div>
      </div>
      <h2 class="homepage__header">About Me</h2>
      <p>
        I am a full-stack web developer who is constantly working to get better
        at my craft. Currently, I work as an apprentice at a web development
        company called Sparkbox, learning as much as I can. Outside of Sparkbox,
        I am completing NYU's Bridge to Tandon program to improve my
        understanding of fundamental computer science concepts such as data
        structures, algorithms, operating systems, and discrete mathematics.
        Prior to working as a developer, I had worked as an elementary school
        teacher. I use my skills gained from working as a teacher such as
        breaking down problems, communicating, and patience to make me a better
        software developer. When I am not coding, I spend my time reading,
        traveling, and drinking lots of coffee.
      </p>

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
