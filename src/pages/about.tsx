import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function About(): ReactNode {
  return (
    <Layout
      title="About PrintPrayPeel.com"
      description="Our mission: help people pray through creative making and quiet evangelization."
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">About PrintPrayPeel.com</Heading>

            <p className="margin-bottom--lg">
              PrintPrayPeel is a simple way to pray with your hands and share faith with gentle beauty.
              We help people enter prayer through quiet, creative making and carry that prayer into daily life.
            </p>

            {/* Mission */}
            <div className="margin-bottom--xl">
              <Heading as="h2">🎯 Our Mission</Heading>
              <p>We create resources that help Catholics:</p>
              <ul>
                <li>Begin or renew a daily habit of prayer</li>
                <li>Pray while they create, with focus and peace</li>
                <li>Share faith through small, beautiful reminders</li>
                <li>Build community around simple acts of devotion</li>
              </ul>
            </div>

            {/* What is Print · Pray · Peel */}
            <div className="margin-bottom--xl">
              <Heading as="h2">🪶 What Is “Print · Pray · Peel”?</Heading>
              <p className="margin-bottom--sm">A three-step rhythm that turns ordinary crafting into a moment of grace:</p>
              <ul>
                <li>
                  <strong>Print</strong> — Choose a sticker page and print at home. Each design includes traditional
                  prayers that match its theme or saint.
                </li>
                <li>
                  <strong>Pray</strong> — As you cut and arrange, pray the words provided or speak to God in your own.
                  Let the steady motion of your hands carry the prayer.
                </li>
                <li>
                  <strong>Peel</strong> — Place and share the finished stickers. A sticker on a water bottle, laptop,
                  notebook, guitar, or luggage becomes a quiet testimony in public places where people can pause and
                  remember God, even for a moment.
                </li>
              </ul>
              <div className="alert alert--info">
                <p className="margin-bottom--sm">
                  New to prayer? Start with <Link to="/guides/how-to-pray">How to Pray</Link>. Ready to craft prayerfully?
                  See <Link to="/guides/how-to-make-stickers">How to Make Prayer Stickers</Link>. Explore texts on the{' '}
                  <Link to="/prayers">Catholic Prayers</Link> page.
                </p>
              </div>
            </div>

            {/* Why stickers */}
            <div className="margin-bottom--xl">
              <Heading as="h2">💡 Why Stickers?</Heading>
              <p>
                Many people find focus and peace in hands-on work. By pairing that calm with the words of the Church,
                a simple craft becomes a small school of prayer. And when you place a sticker on something you carry,
                you create gentle moments of evangelization in classrooms, offices, cafés, and airports. Beauty invites
                the heart to look up.
              </p>
            </div>

            {/* Values */}
            <div className="margin-bottom--xl">
              <Heading as="h2">🌟 Our Values</Heading>
              <div className="row">
                <div className="col col--6">
                  <h3>Faith-Centered</h3>
                  <p>Rooted in Scripture, tradition, and authentic Catholic teaching.</p>
                </div>
                <div className="col col--6">
                  <h3>Accessible</h3>
                  <p>Free resources, simple steps, suitable for all ages and abilities.</p>
                </div>
                <div className="col col--6">
                  <h3>Community-Focused</h3>
                  <p>Sharing faith through small acts of love and creativity.</p>
                </div>
                <div className="col col--6">
                  <h3>Open Source</h3>
                  <p>Transparent, collaborative, and welcoming contributions.</p>
                </div>
              </div>
            </div>

            {/* How it's built + contrib info */}
            <div className="margin-bottom--xl">
              <Heading as="h2">🛠️ How It’s Built</Heading>
              <ul>
                <li><strong>Docusaurus</strong> for a fast, accessible site</li>
                <li><strong>GitHub Pages</strong> for reliable hosting</li>
                <li>
                  <strong>
                    <a
                      href="https://www.npmjs.com/package/@codexcommunion/prayer-collection"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @codexcommunion/prayer-collection
                    </a>
                  </strong>{' '}
                  for structured, authentic Catholic prayers
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.npmjs.com/package/@codexcommunion/liturgical-theme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @codexcommunion/liturgical-theme
                    </a>
                  </strong>{' '}
                  for shared styles and design tokens aligned to the liturgical year
                </li>
                <li><strong>Open Source</strong> code available in our GitHub repositories</li>
              </ul>

              <div className="alert alert--secondary">
                <p className="margin-bottom--sm">
                  Developers: we welcome improvements, new prayers, and design contributions. Visit the NPM package pages
                  or open a pull request on GitHub.
                </p>
                <p className="margin-bottom--sm">
                  NPM:&nbsp;
                  <a
                    href="https://www.npmjs.com/package/@codexcommunion/prayer-collection"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @codexcommunion/prayer-collection
                  </a>
                  &nbsp;·&nbsp;
                  <a
                    href="https://www.npmjs.com/package/@codexcommunion/liturgical-theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @codexcommunion/liturgical-theme
                  </a>
                  &nbsp;· GitHub:&nbsp;
                  <a
                    href="https://github.com/codexcommunion"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CodexCommunion organization
                  </a>
                </p>
              </div>
            </div>

            {/* Get involved */}
            <div className="margin-bottom--xl">
              <Heading as="h2">🤝 Get Involved</Heading>
              <p>Print, pray, and share. You can also:</p>
              <ul>
                <li>Suggest new themes or sticker ideas</li>
                <li>Contribute issues or pull requests on GitHub</li>
                <li>Share PrintPrayPeel with your parish, school, or family</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="margin-bottom--xl">
              <Heading as="h2">📧 Contact Us</Heading>
              <p>We’re grateful for your ideas, stories, and feedback.</p>
              <ul>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/codexcommunion/printpraypeel.com" target="_blank" rel="noopener noreferrer">
                    Visit the repository
                  </a>
                </li>
                <li>
                  <strong>Issues:</strong>{' '}
                  <a href="https://github.com/codexcommunion/printpraypeel.com/issues" target="_blank" rel="noopener noreferrer">
                    Report bugs or request features
                  </a>
                </li>
                <li>
                  <strong>Organization:</strong>{' '}
                  <a href="https://github.com/codexcommunion" target="_blank" rel="noopener noreferrer">
                    CodexCommunion on GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text--center margin-top--xl">
              <Link to="/guides/how-to-make-stickers" className="button button--primary button--lg margin-right--sm">
                Get Started 🙏
              </Link>
              <Link to="/guides/how-to-pray" className="button button--secondary button--lg">
                Learn How to Pray
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
