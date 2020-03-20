import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            key={node.id}
            css={css`
              border: 1px solid #242424;
              background-color: #121212;
              color: #eeeeee;
              box-sizing: border-box;
              padding: 1em;
              box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
              transition: all 0.1s linear;
              :hover {
                border: 1px solid #606060;
              }
              margin-bottom: 1rem;
            `}
          >
            <div
              css={css`
                position: relative;
                color: #6aaa71;
                font-size: 24px;
              `}
            >
              <div
                css={css`
                  display: inline;
                `}
              >
                {node.frontmatter.title}
              </div>
              <div
                css={css`
                  display: inline;
                  float: right;
                  position: relative;
                  font-size: 18px;
                  font-weight: 500;
                  color: #242424;
                  background: #0d0d0d;
                  padding: 6px;
                  border: 1px solid #1c1c1c;
          
                `}
              >
                {node.frontmatter.date}
              </div>
            </div>
            <div
              css={css`
                margin-top: 1em;
              `}
            >
              {node.frontmatter.spoiler}
            </div>
            <div
              css={css`
                position: relative;
                margin-top: 1rem;
              `}
            >
              {node.frontmatter.tags.map(tag => (
                <div
                  key={tag}
                  css={css`
                    display: inline-block;
                    border: 1px solid #1c1c1c;
                    padding: 6px;
                    color: #242424;
                    background: #0d0d0d;
                    margin-right: 6px;
                    text-transform: uppercase;
                  `}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            spoiler
            tags
          }
        }
      }
    }
  }
`
