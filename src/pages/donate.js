import React, { useState } from 'react';
import cx from 'classnames';
import { graphql, Link, Script } from 'gatsby';

import Grid, { GridItem } from 'components/Grid';
import SEO from '../components/seo';
import Button from '../components/Button';
import Layout from '../components/Layout';

import styles from './donate.module.scss';

class VirtuousForm extends React.Component {
  
  loadVirtuousForm() {
    const tag = document.createElement('script');
    tag.async = false;
    tag.src = 'https://cdn.virtuoussoftware.com/virtuous.embed.min.js';
    tag.setAttribute("data-vform", this.props.id);
    tag.setAttribute("data-orgId", "3675");
    tag.setAttribute("data-isGiving", "true");
    tag.setAttribute("data-merchantType", "Virtuous");
    tag.setAttribute("data-dependencies", "[8]")

    const container = document.querySelector('.virtuous-forms');
    container.appendChild(tag);
  }
  
  handleForceRenderForm() {
    //clean up existing node in DOM and React so event listeners are cleaned up.
    const existingForm = document.querySelector(
      `[data-virtuous-form="${this.props.id}"]`
    );
    if (existingForm) {
      console.log("existing form...", existingForm)
      ReactDOM.unmountComponentAtNode(existingForm);
      existingForm.remove();
    }
    
    //create form element to initialize the form
    const formElement = document.createElement('div');
    formElement.setAttribute('data-virtuous-form', '8CD72529-B118-4D39-99E1-45641CB119FC')
    
    const container = document.querySelector(".virtuous-forms");
    container.appendChild(formElement);
    
    //re-render....
    virtuousForm({
        organizationId: 3675,
        formId: this.props.id,
        environment: 1,
        isGiving: true,
        merchantType: "Virtuous"
      });
  }

  //render initial scripts when form loads
  componentDidMount() {
    this.loadVirtuousForm();
  }

  //force render after....
  componentWillReceiveProps(nextProps) {
    this.handleForceRenderForm();
  }


  render() {
    return <div className="virtuous-forms"></div>;
  }
}


const DonatePage = () => {
  const [showForm, setShowForm] = useState(true)

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
              <Link to="#8CD72529-B118-4D39-99E1-45641CB119FC">
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

              <VirtuousForm showForm={showForm} id="8CD72529-B118-4D39-99E1-45641CB119FC" />
              {/* <div id="virtuous-form">
                <Script
                  id="analytics"
                  src="https://cdn.virtuoussoftware.com/virtuous.embed.min.js"
                  data-vform="8cd72529-b118-4d39-99e1-45641cb119fc"
                  data-orgId="3675"
                  data-isGiving="true"
                  data-merchantType="Virtuous"
                />
              </div> */}

              {/* <h2 className="mt--none">Donate laptops</h2>

              {/* <p>
                All of our participants receive a laptop for the duration of the
                program. Support our students’ learning by donating gently used
                laptops!
              </p>

            <Button
                className="mt--lg"
                href="https://docs.google.com/forms/d/e/1FAIpQLSekRlaBYt0ILYZP90bJUiXfTf9fCl0brJwamNAgUoH1hIsZdg/viewform"
              >
                Donate laptops
              </Button>
              <StaticImage
                src="../_assets/images/laptop.png"
                alt="Donate laptops"
                className={styles.laptop}
                align="right"
              /> */}
            </GridItem>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    Laptop: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        id
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default DonatePage;
