import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <div class="main-content">
        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div class="wrapper">
                  <div className="blog-post-preview" key={post.id}>
                    <h1>
                      <Link to={post.frontmatter.path}>
                        {post.frontmatter.title}
                      </Link>
                    </h1>
                    <h2>{post.frontmatter.date}</h2>
                    <p>{post.excerpt}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
