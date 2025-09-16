// src/pages/index.js
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function Hero() {
  return (
    <header className="hero" style={{padding: '2.5rem 0', textAlign: 'center'}}>
      <div className="container">
        <h1 style={{margin: 0}}>카테노이드 서포트 센터</h1>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="카테노이드 서포트 센터">
      <Hero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
