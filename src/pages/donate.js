import React, { useRef, useCallback } from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';

import Grid, { GridItem } from 'components/Grid';
import SEO from '../components/seo';
import Button from '../components/Button';
import Layout from '../components/Layout';

import styles from './donate.module.scss';

const scriptId = '8cd72529-b118-4d39-99e1-45641cb119fc';

const useHookWithRefCallback = () => {
  const ref = useRef(null);
  const setRef = useCallback((node) => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
      const script = document.querySelector('#virtuous-script');
      console.log('cleanup current ref', script);
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
      console.log('node', node);
      const tag = document.createElement('script');
      tag.async = false;
      tag.id = 'virtuous-script';
      tag.src = 'https://cdn.virtuoussoftware.com/virtuous.embed.min.js';
      tag.setAttribute('data-vform', scriptId);
      tag.setAttribute('data-orgId', '3675');
      tag.setAttribute('data-isGiving', 'true');
      tag.setAttribute('data-merchantType', 'Virtuous');
      node.appendChild(tag);
    }

    // Save a reference to the node
    ref.current = node;
  }, []);

  return [setRef];
};

const DonatePage = () => {
  const [donateFormRef] = useHookWithRefCallback();

  return (
    <Layout className={styles.page}>
      <SEO title="Donate" />
      <div className={cx(styles.root, 'content')}>
        <h1 className={cx('title', styles.pageTitle)}>
          Emergent Works interrupts the prison cycle by creating pathways into
          high-paying jobs in technology for formerly incarcerated people.
        </h1>
        <Grid gap={4}>
          <Grid col={2} gap={4}>
            <GridItem justify="left">
              <h2 className="mt--none">Support our work</h2>
              <Link to="#virtuous-form">
                <Button>Donate Now</Button>
              </Link>
              <p>
                <strong>$50 donations</strong> pay for chargers for donated
                laptops.
              </p>
              <p>
                <strong>$100 donations</strong> pay for guest speakers to teach
                workshops.
              </p>
              <p>
                <strong>$500 donations</strong> pay for learning stipends for
                our participants.
              </p>
              <p>Anything you can give helps tremendously!</p>
              <div id="virtuous-form" ref={donateFormRef} />
            </GridItem>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default DonatePage;
