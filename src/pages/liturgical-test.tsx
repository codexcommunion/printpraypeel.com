import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { getCurrentLiturgicalInfo } from '@site/src/utils/liturgical';
import { useEffect, useState } from 'react';

export default function LiturgicalTest(): ReactNode {
  const [liturgicalInfo, setLiturgicalInfo] = useState(null);

  useEffect(() => {
    const info = getCurrentLiturgicalInfo();
    setLiturgicalInfo(info);
  }, []);

  return (
    <Layout
      title="Liturgical Theme Test"
      description="Test page for liturgical theming functionality">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">Liturgical Theme Test</Heading>
            <p className="margin-bottom--lg">
              This page demonstrates the liturgical theming functionality that changes 
              the site's colors based on the current liturgical season.
            </p>

            {liturgicalInfo && (
              <div className="margin-bottom--xl">
                <Heading as="h2">Current Liturgical Information</Heading>
                <div className="alert alert--info">
                  <p><strong>Season:</strong> {liturgicalInfo.season}</p>
                  <p><strong>Color:</strong> {liturgicalInfo.color}</p>
                  <p><strong>Celebration:</strong> {liturgicalInfo.celebration}</p>
                  <p><strong>Rank:</strong> {liturgicalInfo.rank}</p>
                </div>
              </div>
            )}

            <div className="margin-bottom--xl">
              <Heading as="h2">Liturgical Color Meanings</Heading>
              <div className="row">
                <div className="col col--6">
                  <h3>🟢 Green - Ordinary Time</h3>
                  <p>Represents growth, hope, and new life in Christ.</p>
                </div>
                <div className="col col--6">
                  <h3>🟣 Purple/Violet - Advent & Lent</h3>
                  <p>Symbolizes penance, preparation, and sacrifice.</p>
                </div>
                <div className="col col--6">
                  <h3>⚪ White - Christmas & Easter</h3>
                  <p>Represents purity, joy, and the light of Christ.</p>
                </div>
                <div className="col col--6">
                  <h3>🔴 Red - Martyrs & Pentecost</h3>
                  <p>Symbolizes the blood of martyrs and the fire of the Holy Spirit.</p>
                </div>
                <div className="col col--6">
                  <h3>🟡 Gold - Special Feasts</h3>
                  <p>Used for the most solemn celebrations and feasts.</p>
                </div>
                <div className="col col--6">
                  <h3>🌸 Rose - Gaudete & Laetare</h3>
                  <p>Used on the third Sunday of Advent and fourth Sunday of Lent.</p>
                </div>
              </div>
            </div>

            <div className="margin-bottom--xl">
              <Heading as="h2">How It Works</Heading>
              <p>
                The site automatically detects the current liturgical season using the 
                <code>romcal</code> library and applies appropriate colors from the 
                <code>catholic-css</code> package. The colors are applied to:
              </p>
              <ul>
                <li>Primary theme colors (buttons, links, etc.)</li>
                <li>Navigation elements</li>
                <li>Accent colors throughout the site</li>
              </ul>
              <p>
                This creates a dynamic, spiritually-aware user experience that changes 
                throughout the liturgical year.
              </p>
            </div>

            <div className="text--center margin-top--xl">
              <a href="/" className="button button--primary button--lg">
                Back to Home 🏠
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
