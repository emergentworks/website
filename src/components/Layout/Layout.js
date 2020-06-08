/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import Header from '../Header'
import Footer from '../Footer'

import styles from './Layout.module.scss'
import '_assets/css/style.scss'

export const Layout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      sitePage {
        path
      }
    }
  `)

  return (
    <>
      <Header />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <main className={cx(`sitePage sitePage-${className}`)}>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
