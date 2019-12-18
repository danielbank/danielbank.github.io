import React from "react"
import { StaticQuery, graphql } from "gatsby"

export const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}
