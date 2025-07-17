import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import StickerDiscoveryBanner from '@site/src/components/StickerDiscoveryBanner';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className="hero__title">
            Print. Pray. Peel.
          </Heading>
          <p className={styles.heroSubtitle}>
            A joyful spiritual practice that transforms simple sticker-making into meaningful prayer time
          </p>


        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Print Catholic prayer stickers, pray while cutting them out, and share them with others to spread faith and joy.">
      <StickerDiscoveryBanner />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
