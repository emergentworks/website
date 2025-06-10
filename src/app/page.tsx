import Layout from "components/Layout";

import styles from "./page.module.scss"; // Import the new page-specific styles

export default function Home() {
  return (
    <Layout>
      <h1 className="h1">Hello, Styles!</h1>
      <p>
        If you can see this text styled, along with the header and footer, your
        SCSS rules are being applied correctly.
      </p>
    </Layout>
  );
}
