import React from 'react'
import { graphql, Link } from 'gatsby'
import Proptypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Button from '../components/Button'

import styles from './news.module.scss'

const NewsIndex = ({ data }) => (
  <Layout>
    <SEO title="News" />
    <div className="content">
      <h1 className={styles.title}>News</h1>
      <section className={styles.articleGroup}>
        {data.allMdx.edges.map(news => {
          console.log(parseInt(news.node.frontmatter.date))

          return (
            <article className={styles.article} key={news.node.id}>
              <h2>{news.node.frontmatter.title}</h2>
              <span>{news.node.frontmatter.date}</span>
              <p>{news.node.frontmatter.blurb}</p>
              <Button to={news.node.frontmatter.path}>Read More</Button>
            </article>
          )
        })}
      </section>
    </div>
  </Layout>
)

NewsIndex.propTypes = {
  data: Proptypes.object,
}

export const query = graphql`
  query NewsIndex {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
            blurb
          }
        }
      }
    }
  }
`

export default NewsIndex
