import React from "react"
import { Link } from "gatsby"
import SusmitaBitmoji from "../images/bitmoji_susmita.jpg"
import Susmita from "../images/susmita.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Susmita Bhowmik" />
    <div class="flip-box">
      <div class="flip-box--inner">
        <div class="flip-box--front">
          <img src={SusmitaBitmoji} alt="picuture of me"></img>
        </div>
        <div class="flip-box--back">
          <img src={Susmita} alt="picuture of me"></img>
        </div >
      </div >
    </div >
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/projects/">See my work.</Link>
  </Layout >
)

export default IndexPage
