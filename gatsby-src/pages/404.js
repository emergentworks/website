import React from "react";

import Layout from "components/Layout";
import SEO from "components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="content">
      <h1>Oops!</h1>
      <p>Looks like this page doesn't exist.</p>
    </section>
  </Layout>
);

export default NotFoundPage;
