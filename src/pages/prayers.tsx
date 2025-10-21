import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import PrayerCard from '../components/PrayerCard';

// Import prayer collection API
import { 
  getAllPrayers,
  getPrimaryCategories,
  getLabels,
  getPrayersByLabel
} from '@codexcommunion/prayer-collection';

// Get collection stats
const allPrayers = getAllPrayers();
const prayerCount = allPrayers.length;
const categories = getPrimaryCategories();
const labels = getLabels();

// Get core and marian prayers for display
const corePrayers = getPrayersByLabel('core');
const marianPrayers = getPrayersByLabel('marian');

// Combine and limit to featured prayers (take first few from each category)
const featuredPrayers = [
  ...corePrayers.slice(0, 5),
  ...marianPrayers.slice(0, 5)
];

export default function Prayers(): ReactNode {
  return (
    <Layout
      title="Catholic Prayers"
      description="Traditional Catholic prayers to accompany personal devotion and PrintPrayPeel crafting."
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">Catholic Prayers</Heading>

            <p className="margin-bottom--lg">
              When our own words feel small, the Church lends us hers. Below you’ll find time-tested prayers
              that appear throughout our sticker designs, allowing you to pray while you create.
            </p>

            <div className="alert alert--info margin-bottom--xl">
              <h4 className="margin-bottom--sm">New to prayer or to PrintPrayPeel?</h4>
              <p className="margin-bottom--sm">
                Start with <Link to="/guides/how-to-pray">How to Pray</Link> for a gentle introduction,
                and visit <Link to="/guides/how-to-make-stickers">How to Make Prayer Stickers</Link> to see
                how these prayers come to life through crafting.
              </p>
            </div>

            {/* Prayer Collection Info */}
            <div className="margin-bottom--xl">
              <Heading as="h2">📿 Prayer Collection</Heading>
              <p className="margin-bottom--sm">
                All prayers are sourced from the{' '}
                <a
                  href="https://www.npmjs.com/package/@codexcommunion/prayer-collection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <code>@codexcommunion/prayer-collection</code>
                </a>{' '}
                package—authentic Catholic texts formatted for clear reading, devotional use, and easy
                integration into apps or websites. The collection includes{' '}
                <strong>{prayerCount} prayers</strong> organized across{' '}
                <strong>{categories.length} categories</strong> with{' '}
                <strong>{labels.length} labels</strong> for flexible filtering.
              </p>
              <p>
                Explore the collection on{' '}
                <a
                  href="https://github.com/codexcommunion/prayer-collection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{' '}
                or view the{' '}
                <a
                  href="https://www.npmjs.com/package/@codexcommunion/prayer-collection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NPM package
                </a>{' '}
                for more information.
              </p>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">🙏 Sample Prayers</Heading>
              <p className="margin-bottom--md">
                A few sample prayers used across our sticker themes and devotional projects:
              </p>

              <div className="row">
                <div className="col col--12">
                  <div className="row">
                    {featuredPrayers.map((prayer: any) => (
                      <PrayerCard key={prayer.metadata.id} prayer={prayer} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text--center margin-top--xl">
              <Link to="/stickers" className="button button--primary button--lg margin-right--sm">
                Browse Sticker Collection
              </Link>
              <Link to="/guides/how-to-pray" className="button button--secondary button--lg">
                Read How to Pray
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
