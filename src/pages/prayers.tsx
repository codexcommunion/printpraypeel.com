import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import PrayerCard from '../components/PrayerCard';

// Prayers from the package
import gloryBe from '@codexcommunion/prayer-collection/prayers/core/glory-be.json';
import hailMary from '@codexcommunion/prayer-collection/prayers/core/hail-mary.json';
import ourFather from '@codexcommunion/prayer-collection/prayers/core/our-father.json';
import apostlesCreed from '@codexcommunion/prayer-collection/prayers/creeds/apostles-creed.json';
import angelus from '@codexcommunion/prayer-collection/prayers/marian/angelus.json';
import hailHolyQueen from '@codexcommunion/prayer-collection/prayers/marian/hail-holy-queen.json';
import memorare from '@codexcommunion/prayer-collection/prayers/marian/memorare.json';
import actOfContrition from '@codexcommunion/prayer-collection/prayers/penitential/act-of-contrition.json';
import stMichaelPrayer from '@codexcommunion/prayer-collection/prayers/saints/st-michael-prayer.json';

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

            {/* Combined collection + developer info */}
            <div className="margin-bottom--xl">
              <Heading as="h2">📿 Prayer Collection (and Developer Info)</Heading>
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
                integration into apps or websites.
              </p>
              <details>
                <summary style={{ cursor: 'pointer' }}><strong>For developers</strong></summary>
                <div className="margin-top--sm">
                  <p className="margin-bottom--sm">
                    Each prayer is a JSON file with helpful metadata (<em>id</em>, <em>category</em>, <em>source</em>, <em>text</em>).
                    Install and import directly:
                  </p>
                  <pre>
                    <code>
{`npm install @codexcommunion/prayer-collection

import hailMary from '@codexcommunion/prayer-collection/prayers/core/hail-mary.json';

console.log(hailMary.text);`}
                    </code>
                  </pre>
                  <p className="margin-bottom--sm">
                    Contribute or explore related projects on{' '}
                    <a
                      href="https://github.com/codexcommunion/prayer-collection"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>. See the{' '}
                    <a
                      href="https://www.npmjs.com/package/@codexcommunion/prayer-collection"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NPM package page
                    </a>{' '}
                    for versions and documentation.
                  </p>
                </div>
              </details>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">🙏 Some Featured Prayers</Heading>
              <p className="margin-bottom--md">
                A sampling of frequently used prayers across our sticker themes and devotional projects:
              </p>

              <div className="row">
                <div className="col col--12">
                  <div className="row">
                    {[
                      gloryBe,
                      hailMary,
                      ourFather,
                      apostlesCreed,
                      angelus,
                      hailHolyQueen,
                      memorare,
                      actOfContrition,
                      stMichaelPrayer,
                    ].map((prayer: any) => (
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
