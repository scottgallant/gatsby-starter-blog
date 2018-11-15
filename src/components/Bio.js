import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'
import profilePic from '../uploads/profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query BioDataQuery {
            dataJson {
              name
              profilePic { 
                childImageSharp {
                  fixed(width: 56, height: 56) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              bio
            }
          }
        `}
        render = {data => (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={data.dataJson.profilePic.childImageSharp.fixed.src}
          alt={data.dataJson.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <div dangerouslySetInnerHTML={{__html: data.dataJson.bio}}></div>
      </div>
        )}
        />
    )
  }
}

export default Bio
