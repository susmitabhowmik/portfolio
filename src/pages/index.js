import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Susmita Bhowmik" />
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/projects/">See my work.</Link>
  </Layout>
)

export default IndexPage
