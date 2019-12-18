import React from "react"
import { graphql, Link } from "gatsby"

const SingleTagTemplate = ({ data, pageContext }) => {
  const { tagName, posts } = pageContext
  console.log(posts)
  return (
    <div>
      <h1>{tagName}</h1>
      <ul>
        {posts.map(post => (
          <li key={post.frontmatter.path}>{post.frontmatter.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default SingleTagTemplate
