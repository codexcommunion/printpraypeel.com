import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import PrayerCard from '../components/PrayerCard';
// Import individual prayer files directly from the npm package
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
      description="Traditional Catholic prayers for meditation and spiritual growth">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">Catholic Prayers</Heading>
            <p className="margin-bottom--lg">
              These traditional Catholic prayers are integrated into our sticker designs.
              Each prayer is meant to be recited while cutting out the corresponding sticker,
              creating a meditative and spiritual crafting experience.
            </p>

            <div className="margin-bottom--xl">
              <Heading as="h2">📿 Prayer Collection</Heading>
              <p>
                Our prayers come from the{' '}
                <a
                  href="https://www.npmjs.com/package/@codexcommunion/prayer-collection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <code>@codexcommunion/prayer-collection</code>
                </a>{' '}
                NPM package, which contains authentic Catholic prayers formatted for easy reading and meditation.
              </p>

              <div className="alert alert--info margin-bottom--lg">
                <h4>Prayer Integration</h4>
                <p>
                  Each sticker design includes specific prayers that complement the cutting and crafting process.
                  The prayers are chosen to enhance the spiritual experience while creating something beautiful to share.
                </p>
              </div>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">🙏 Featured Prayers</Heading>
              <p>Our stickers include these traditional Catholic prayers from our collection:</p>

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
                      stMichaelPrayer
                    ].map((prayer: any) => (
                      <PrayerCard key={prayer.metadata.id} prayer={prayer} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">✨ How to Use Prayers with Stickers</Heading>
              <ol>
                <li><strong>Choose a sticker design</strong> that resonates with you</li>
                <li><strong>Print the sticker</strong> on your preferred paper</li>
                <li><strong>Read the prayer</strong> provided with the sticker</li>
                <li><strong>Begin cutting</strong> while slowly reciting the prayer</li>
                <li><strong>Meditate</strong> on the meaning of the words</li>
                <li><strong>Complete the sticker</strong> with a closing prayer</li>
                <li><strong>Share</strong> the sticker with someone special</li>
              </ol>
            </div>

            <div className="text--center margin-top--xl">
              <Link to="/stickers" className="button button--primary button--lg">
                Browse Sticker Collection 📄
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
