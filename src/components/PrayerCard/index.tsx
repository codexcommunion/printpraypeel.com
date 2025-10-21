import type { ReactNode } from 'react';
import { useState } from 'react';
import { getPrayerText } from '@codexcommunion/prayer-collection';

interface PrayerCardProps {
  prayer: {
    metadata: {
      id: string;
      title: string;
      description: string;
    };
    translations: {
      en: {
        text?: string;
      };
    };
  };
}

export default function PrayerCard({ prayer }: PrayerCardProps): ReactNode {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Get prayer text using the API for consistency
  const prayerText = getPrayerText(prayer.metadata.id, 'en') || prayer.translations.en.text || '';

  return (
    <div className="col col--12 margin-bottom--md">
      <div className="card">
        <div className="card__body">
          <h4 className="margin-bottom--sm">{prayer.metadata.title}</h4>
          <p className="text--muted margin-bottom--sm">
            {prayer.metadata.description}
          </p>
          
          <button
            className="button button--secondary button--sm"
            onClick={toggleExpanded}
            style={{ cursor: 'pointer' }}
          >
            {isExpanded ? 'Hide Prayer Text' : 'Show Prayer Text'} {isExpanded ? '▲' : '▼'}
          </button>
          
          {isExpanded && (
            <div className="margin-top--sm">
              <div className="alert alert--secondary">
                <div style={{ 
                  fontStyle: 'italic', 
                  lineHeight: '1.6',
                  whiteSpace: 'pre-line'
                }}>
                  {prayerText}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}