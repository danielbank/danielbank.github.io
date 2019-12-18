import React from "react"
import { graphql, Link } from "gatsby"

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext
  return (
    <div>
      <p>Tags</p>
      <ul>
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllTagsTemplate
