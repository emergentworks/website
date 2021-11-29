import React from 'react';
import { graphql } from 'gatsby';
import cx from 'classnames';
import Proptypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import styles from './post.module.scss';

function Post({ data: { mdx } }) {
  return (
    <Layout className={styles.page}>
      <SEO title={mdx.frontmatter.title} />
      <section className={cx(styles.root, 'content')}>
        <h1 className={styles.title}>{mdx.frontmatter.title}</h1>
        <div className={styles.body}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </section>
    </Layout>
  );
}

Post.propTypes = {
  data: Proptypes.shape({
    mdx: Proptypes.object,
  }),
};

export const postQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        path
        blurb
      }
      body
    }
  }
`;

export default Post;
