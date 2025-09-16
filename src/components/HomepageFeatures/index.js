import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const products = [
  {
    title: 'Kollus VOD',
    links: [
      {label: '서비스 가이드', href: 'https://cylee-catenoid.github.io/guide/kollus-vod/intro'},
      {label: '개발자 센터', href: 'https://cylee-catenoid.github.io/developer'},
    ],
  },
  {
    title: 'Kollus Live',
    links: [
      {label: '서비스 가이드', href: 'https://cylee-catenoid.github.io/guide/kollus-live/intro'},
      {label: '개발자 센터', href: 'https://cylee-catenoid.github.io/developer'},
    ],
  },
  {
    title: 'Kollus Live Commerce',
    links: [
      {label: '서비스 가이드', href: 'https://cylee-catenoid.github.io/guide/home'},
    ],
  },
  {
    title: 'Loomex',
    links: [{label: '서비스 가이드', href: 'https://cylee-catenoid.github.io/guide/home'}],
  },
  {
    title: 'Charlla',
    links: [{label: '서비스 가이드', href: 'https://cylee-catenoid.github.io/guide/home'}],
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.title} className={styles.card}>
            <h3 className={styles.title}>{p.title}</h3>
            <div className={styles.links}>
              {p.links.map((l) => (
                <Link key={l.href} className={styles.link} to={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
