import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Stickers(): ReactNode {
  return (
    <Layout
      title="Sticker Library"
      description="Browse and download Catholic prayer stickers for printing, praying, and sharing">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">Sticker Library</Heading>
            <p className="margin-bottom--lg">
              Welcome to our collection of Catholic prayer stickers! Each sticker is designed to help you 
              pray, reflect, and share your faith with others.
            </p>

            <div className="margin-bottom--xl">
              <Heading as="h2">🚧 Coming Soon!</Heading>
              <p>
                We're currently preparing our initial collection of prayer stickers. Each will include:
              </p>
              <ul>
                <li>Beautiful, printable sticker designs</li>
                <li>Traditional Catholic prayers</li>
                <li>Prayer guides for meditation while cutting</li>
                <li>Easy-to-follow instructions</li>
              </ul>
              
              <p>
                Our first collection will feature stickers for:
              </p>
              <ul>
                <li>The Sign of the Cross</li>
                <li>Hail Mary</li>
                <li>Our Father</li>
                <li>Glory Be</li>
                <li>Guardian Angel Prayer</li>
                <li>Prayer to St. Michael</li>
                <li>And many more...</li>
              </ul>
            </div>

            <div className="alert alert--info margin-bottom--lg">
              <h4>Stay Tuned!</h4>
              <p>
                We're working hard to bring you the first collection of PrintPrayPeel stickers. 
                Check back soon, or follow our GitHub repository for updates.
              </p>
            </div>

            <div className="text--center margin-top--xl">
              <a href="/how-it-works" className="button button--primary button--lg">
                Learn How It Works 🙏
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
