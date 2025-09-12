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
    <Layout title="카테노이드 서포트 센터" description="문서 허브">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>카테노이드 서포트 센터</h1>
        </div>
      </header>

      <main className="container">
        <div className={styles.grid}>
          {/* 왼쪽 2열 × 3행 작은 카드들 */}
          <div className={`${styles.card} ${styles.a1}`}>
            <div className={styles.cardTitle}>Kollus Player</div>

            <ul className={styles.cardLinks}>
              <li>
                <Link to="https://cylee-catenoid.github.io/player-guide/">
                  사용자 가이드
                </Link>
              </li>
              <li>
                <Link to="https://cylee-catenoid.github.io/player-guide/faq">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.a2}`}>
            <div className={styles.cardTitle}>Kollus VOD</div>

            <ul className={styles.cardLinks}>
              <li>
                <Link to="https://cylee-catenoid.github.io/vod-guide/">
                  사용자 가이드
                </Link>
              </li>
            </ul>
          </div>

          {/* TODO: 실제 URL로 교체 */}
          <div className={`${styles.card} ${styles.a3}`}>
            <div className={styles.cardTitle}>Kollus Live</div>
            <ul className={styles.cardLinks}>
              <li>
                <Link to="https://cylee-catenoid.github.io/vod-guide/">
                  사용자 가이드
                </Link>
              </li>
            </ul>
          </div>

          {/* TODO: 실제 URL로 교체 */}
          <div className={`${styles.card} ${styles.a4}`}>
            <div className={styles.cardTitle}>Kollus Live Commerce</div>

            <ul className={styles.cardLinks}>
              <li>
                <Link to="https://cylee-catenoid.github.io/vod-guide/">
                  사용자 가이드
                </Link>
              </li>
            </ul>
          </div>

          {/* TODO: 실제 URL로 교체 */}
          <div className={`${styles.card} ${styles.a5}`}>
            <div className={styles.cardTitle}>Loomex</div>
            
            <ul className={styles.cardLinks}>
              <li>
                <Link to="https://cylee-catenoid.github.io/vod-guide/">
                  사용자 가이드
                </Link>
              </li>
            </ul>
          </div>

          {/* TODO: 실제 URL로 교체 */}
          <div className={`${styles.card} ${styles.a6}`}>
            <div className={styles.cardTitle}>Charlla</div>

            <ul className={styles.cardLinks}>
              <li>
                <Link to="https://cylee-catenoid.github.io/vod-guide/">
                  사용자 가이드
                </Link>
              </li>
            </ul>
          </div>

          {/* 오른쪽 큰 카드 (세로로 길게) */}
          <div className={`${styles.card} ${styles.cardBig}`}>
            <div className={styles.cardTitle}>Kollus 개발자 센터</div>

            <ul className={styles.cardLinks}>
              <li>
                <Link to="https://cylee-catenoid.github.io/developer/docs/intro">
                  개발 가이드
                </Link>
              </li>
              <li>
                <Link to="https://cylee-catenoid.github.io/developer/api">
                  API 레퍼런스
                </Link>
              </li>
              <li>
                <Link to="https://cylee-catenoid.github.io/developer/sdk">
                  모바일 SDK
                </Link>
              </li>
              <li>
                <Link to="https://cylee-catenoid.github.io/developer/demo">
                  데모 Player
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
