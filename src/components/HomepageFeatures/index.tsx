import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { IconScissors, IconPhotoSearch, IconPray } from '@tabler/icons-react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Icon: React.FC<{ size: number; stroke: number; className: string }>;
  description: ReactNode;
  linkTo: string;
  linkText: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn to Make Stickers',
    Icon: IconScissors,
    description: (
      <>
        Discover how to create your own stickers with our step-by-step guide.
      </>
    ),
    linkTo: '/guides/how-to-make-stickers',
    linkText: 'View Guide',
  },
  {
    title: 'Explore Stickers',
    Icon: IconPhotoSearch,
    description: (
      <>
        Browse our collection of beautiful stickers.
        Find designs for every occasion and spiritual need.
      </>
    ),
    linkTo: '/stickers',
    linkText: 'Browse Stickers',
  },
  {
    title: 'Learn How to Pray',
    Icon: IconPray,
    description: (
      <>
        Check out our prayer guide and learn how to pray, or elevate your prayer life to the next level.
      </>
    ),
    linkTo: '/guides/how-to-pray',
    linkText: 'View Prayer Guide',
  },
];

function Feature({ title, Icon, description, linkTo, linkText }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon size={64} stroke={1.5} className={styles.featureIcon} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link
          className="button button--primary"
          to={linkTo}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}