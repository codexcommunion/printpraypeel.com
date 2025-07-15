import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function HowItWorks(): ReactNode {
  return (
    <Layout
      title="How It Works"
      description="Learn how to use PrintPrayPeel.com to create meaningful prayer stickers">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">How It Works</Heading>
            <p className="margin-bottom--lg">
              PrintPrayPeel.com makes it easy to combine prayer, creativity, and sharing. 
              Follow these three simple steps to create meaningful stickers that spread faith and joy.
            </p>

            <div className="margin-bottom--xl">
              <Heading as="h2">🖨️ Step 1: Print</Heading>
              <p>
                Browse our collection of Catholic prayer stickers and download the ones that speak to you. 
                Each sticker comes as a high-quality PDF file that's ready to print on standard paper using 
                any home printer.
              </p>
              <ul>
                <li>Choose from various prayer themes and designs</li>
                <li>Download PDF files optimized for home printing</li>
                <li>Print on standard paper or sticker paper</li>
                <li>No special equipment needed</li>
              </ul>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">🙏 Step 2: Pray</Heading>
              <p>
                As you cut out each sticker, recite the Catholic prayers provided with each design. 
                This transforms a simple craft activity into a meaningful prayer experience.
              </p>
              <ul>
                <li>Follow the prayer guides provided with each sticker</li>
                <li>Take your time - this is a meditative process</li>
                <li>Reflect on the meaning of each prayer</li>
                <li>Make it a family activity or personal quiet time</li>
              </ul>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">📤 Step 3: Peel & Share</Heading>
              <p>
                Once your stickers are ready, share them with friends, family, and your community. 
                Each sticker includes a link back to PrintPrayPeel.com, inviting others to join 
                in this meaningful activity.
              </p>
              <ul>
                <li>Give stickers to friends and family</li>
                <li>Leave them in public places for others to find</li>
                <li>Use them in your parish or community group</li>
                <li>Each sticker helps spread faith and invite others to pray</li>
              </ul>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">🌟 Why PrintPrayPeel?</Heading>
              <p>
                This simple process creates multiple opportunities for spiritual growth:
              </p>
              <ul>
                <li><strong>Personal Prayer:</strong> Deepen your own faith through prayer while crafting</li>
                <li><strong>Mindful Activity:</strong> Engage in a meditative, hands-on spiritual practice</li>
                <li><strong>Community Building:</strong> Share your faith with others in a gentle, non-intrusive way</li>
                <li><strong>Accessibility:</strong> Simple enough for all ages and skill levels</li>
                <li><strong>Evangelization:</strong> Spread Catholic prayers and invite others to participate</li>
              </ul>
            </div>

            <div className="text--center margin-top--xl">
              <a href="/stickers" className="button button--primary button--lg">
                Browse Our Sticker Collection 📄
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
