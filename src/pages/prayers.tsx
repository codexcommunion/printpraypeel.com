import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

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
                Our prayers come from the <code>@codexcommunion/prayer-collection</code> NPM package, 
                which contains authentic Catholic prayers formatted for easy reading and meditation.
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
              <p>Our stickers will include these traditional Catholic prayers:</p>
              
              <div className="row">
                <div className="col col--6">
                  <h3>Essential Prayers</h3>
                  <ul>
                    <li>The Sign of the Cross</li>
                    <li>Our Father (Lord's Prayer)</li>
                    <li>Hail Mary</li>
                    <li>Glory Be</li>
                    <li>Apostles' Creed</li>
                  </ul>
                </div>
                <div className="col col--6">
                  <h3>Devotional Prayers</h3>
                  <ul>
                    <li>Guardian Angel Prayer</li>
                    <li>Prayer to St. Michael</li>
                    <li>Memorare</li>
                    <li>Prayer to St. Joseph</li>
                    <li>Act of Contrition</li>
                  </ul>
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
              <a href="/stickers" className="button button--primary button--lg">
                Browse Sticker Collection 📄
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
