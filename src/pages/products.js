import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import { WaterColor } from '../components/WaterColor/WaterColor';

import styles from './products.module.scss';

const ProductsPage = () => (
  <Layout className={styles.page}>
    <SEO title="Products" />
    <div className="content">
      <div className="twoColumnLayout">
        <h1 className="title">
          We understand that every organization has technological needs, but
          maybe not the resources to make those needs a reality. Emergent Works’
          technical team can{' '}
          <strong>build and support robust, custom technical solutions</strong>.
        </h1>
        <WaterColor color="green" />
      </div>
      <p>We help non-profits in the liberation space to...</p>
      <ul>
        <li>
          Answer questions about their data to support their on-the-ground
          organizing, fundraising, and advocacy work
        </li>
        <li>
          Choose and configure the best software that fits their organization's
          problems
        </li>
        <li>Move from paper to digital record-keeping</li>
        <li>
          Store and share organization information securely to protect client
          and staff privacy
        </li>
        <li>
          Build a website or blog to help share their organization's work more
          broadly
        </li>
        <li>
          Provide training for staff via our in-house technical education
          programs
        </li>
      </ul>
    </div>
    <div className={cx(styles.partnersFooter, 'content')}>
      <h2>
        We build the tech so movement orgs can focus on doing the work. Partner
        With Us!
      </h2>
      Are you an organization in need of a technical solution to support your
      movement? Reach out to us at{' '}
      <a href="mailto:products@emergentworks.org?subject=Product%20Partnership">
        products@emergentworks.org
      </a>
      .
    </div>
  </Layout>
);

export default ProductsPage;
