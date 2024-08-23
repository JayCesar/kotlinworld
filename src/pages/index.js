import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <section className={styles.bgheader}>
      <div  className={styles.insideContent}>
        <h1> <i>> my kotlin journey</i></h1>
        <p>
          Welcome to my <b>Kotlin development notes!</b> 
          
          <br></br>This page is a personal space
          where I document my journey through <b>learning and coding in Kotlin. </b>
          
          <br></br>
          
          Whether you're a fellow learner or just curious, <b>feel free to explore
          my notes</b> and see <b>how my understanding of Kotlin evolves over time.</b>
        </p>
      </div>
    </section>
  );

  // const {siteConfig} = useDocusaurusContext();
  // return (
  //   <header className={clsx('hero hero--primary', styles.heroBanner)}>
  //     <div className="container">
  //       <Heading as="h1" className="hero__title">
  //         {siteConfig.title}
  //       </Heading>
  //       <p className="hero__subtitle">{siteConfig.tagline}</p>
  //       <div className={styles.buttons}>
  //         <Link
  //           className="button button--secondary button--lg"
  //           to="/docs/intro">
  //           Docusaurus Tutorial - 5min ⏱️
  //         </Link>
  //       </div>
  //     </div>
  //   </header>
  // );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
