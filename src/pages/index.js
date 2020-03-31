import React from "react"
import SusmitaBitmoji from "../images/bitmoji_susmita.jpg"
import Susmita from "../images/susmita.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Susmita Bhowmik" />
    <div class="wrapper">
      <div class="flip-box">
        <div class="flip-box--inner">
          <div class="flip-box--front">
            <img class="flip-box--img" src={SusmitaBitmoji} alt="cartoon picuture of me"></img>
          </div>
          <div class="flip-box--back">
            <img class="flip-box__img" src={Susmita} alt="picuture of me"></img>
          </div >
        </div >
      </div >
      <h2 class="homepage__header">About Me</h2>
      <p>
        I am a full-stack web developer who is constantly working to get better at my craft. Currently, I work as an apprentice at a web development company called Sparkbox, learning as much as I can.
        Outside of Sparkbox, I am completing NYU's Bridge to Tandon program to gain acceptance to NYU's masters in computer science program. Prior to working as a developer, I had worked as an elementary
        school teacher. I use my skills gained from working as a teacher such as breaking down problems, communicating, and patience to make me a better software developer. When I am not coding, I spend my time reading, traveling, and
        drinking lots of coffee.
      </p>
    </div>
  </Layout >
)

export default IndexPage
