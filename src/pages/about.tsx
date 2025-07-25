import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About(): ReactNode {
  return (
    <Layout
      title="About PrintPrayPeel.com"
      description="Learn about our mission to combine prayer, creativity, and faith sharing through printable stickers">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">About PrintPrayPeel.com</Heading>
            <p className="margin-bottom--lg">
              PrintPrayPeel.com is a Catholic community project that combines prayer, creativity, and faith sharing 
              through the simple act of making stickers.
            </p>

            <div className="margin-bottom--xl">
              <Heading as="h2">🎯 Our Mission</Heading>
              <p>
                We believe that faith can be shared in simple, joyful ways. Our mission is to provide tools 
                that help Catholics:
              </p>
              <ul>
                <li>Deepen their prayer life through meditative crafting</li>
                <li>Create beautiful, meaningful items to share with others</li>
                <li>Spread Catholic prayers and teachings in a gentle, accessible way</li>
                <li>Build community through shared spiritual activities</li>
              </ul>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">💡 The Inspiration</Heading>
              <p>
                The idea for PrintPrayPeel came from recognizing that many people find peace and focus in 
                hands-on activities. By combining the meditative nature of crafting with traditional Catholic 
                prayers, we create opportunities for:
              </p>
              <ul>
                <li><strong>Contemplative Prayer:</strong> Slow, mindful recitation while working with your hands</li>
                <li><strong>Active Evangelization:</strong> Sharing faith through beautiful, tangible gifts</li>
                <li><strong>Community Building:</strong> Creating connections through shared spiritual practices</li>
                <li><strong>Accessible Spirituality:</strong> Making prayer accessible to all ages and abilities</li>
              </ul>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">🛠️ How We Built This</Heading>
              <p>
                PrintPrayPeel.com is built with love and the following technologies:
              </p>
              <ul>
                <li><strong>Docusaurus:</strong> For a fast, accessible website</li>
                <li><strong>GitHub Pages:</strong> For free, reliable hosting</li>
                <li><strong>@codexcommunion/prayer-collection:</strong> For authentic Catholic prayers</li>
                <li><strong>Open Source:</strong> All code is available on GitHub</li>
              </ul>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">🌟 Our Values</Heading>
              <div className="row">
                <div className="col col--6">
                  <h3>Faith-Centered</h3>
                  <p>Everything we create is rooted in authentic Catholic teaching and tradition.</p>
                </div>
                <div className="col col--6">
                  <h3>Accessible</h3>
                  <p>Our resources are free and designed for people of all ages and technical abilities.</p>
                </div>
                <div className="col col--6">
                  <h3>Community-Focused</h3>
                  <p>We believe in building connections and sharing faith through practical acts of love.</p>
                </div>
                <div className="col col--6">
                  <h3>Open Source</h3>
                  <p>Our work is transparent and available for others to use and improve.</p>
                </div>
              </div>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">🤝 Get Involved</Heading>
              <p>
                PrintPrayPeel.com is a community project. Here's how you can contribute:
              </p>
              <ul>
                <li><strong>Use and Share:</strong> Print stickers, pray, and share them with others</li>
                <li><strong>Contribute Ideas:</strong> Suggest new prayer themes or sticker designs</li>
                <li><strong>Technical Help:</strong> Contribute to our open source code on GitHub</li>
                <li><strong>Spread the Word:</strong> Tell your parish, family, and friends about PrintPrayPeel</li>
              </ul>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">📧 Contact Us</Heading>
              <p>
                We'd love to hear from you! Whether you have questions, suggestions, or just want to share 
                your PrintPrayPeel experience, please reach out:
              </p>
              <ul>
                <li><strong>GitHub:</strong> <a href="https://github.com/codexcommunion/printpraypeel.com">Visit our repository</a></li>
                <li><strong>Issues:</strong> <a href="https://github.com/codexcommunion/printpraypeel.com/issues">Report bugs or suggest features</a></li>
                <li><strong>CodexCommunion:</strong> <a href="https://github.com/codexcommunion">Our organization</a></li>
              </ul>
            </div>

            <div className="text--center margin-top--xl">
              <a href="/guides/how-to-make-stickers" className="button button--primary button--lg">
                Get Started 🙏
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
