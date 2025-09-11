import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

/*function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}*/

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Kollus 가이드 센터" description="개발 문서 허브">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>Kollus 가이드 센터</h1>
          <p className={styles.heroSubtitle}>아래 카드로 각 사이트로 이동하세요</p>
        </div>
      </header>

      <main className="container">
        <div className={`row ${styles.cardRow}`}>
          {/* 사이트 A */}
          <div className="col col--3">
            <Link to="https://cylee-catenoid.github.io/player-guide/" className={styles.cardLink}>
              <div className={`card ${styles.card}`}>
                <div className="card__header">
                  <h3 className={styles.cardTitle}>Kollus Player 사용자 가이드</h3>
                </div>
                <div className="card__body">
                </div>
              </div>
            </Link>
          </div>

          {/* 사이트 B */}
          <div className="col col--3">
            <Link to="https://ylee-catenoid.github.io/vod-guide/" className={styles.cardLink}>
              <div className={`card ${styles.card}`}>
                <div className="card__header">
                  <h3 className={styles.cardTitle}>Kollus VOD 사용자 가이드</h3>
                </div>
                <div className="card__body">
                </div>
              </div>
            </Link>
          </div>

          {/* 사이트 C */}
          <div className="col col--3">
            <Link to="https://ylee-catenoid.github.io/developer/" className={styles.cardLink}>
              <div className={`card ${styles.card}`}>
                <div className="card__header">
                  <h3 className={styles.cardTitle}>Kollus 개발자 센터</h3>
                </div>
                <div className="card__body">
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
