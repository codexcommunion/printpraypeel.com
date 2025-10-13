import type { ReactNode } from 'react';
import { useState } from 'react';

interface PrayerCardProps {
  prayer: {
    metadata: {
      id: string;
      title: string;
      description: string;
    };
    translations: {
      en: {
        text: string;
      };
    };
  };
}

export default function PrayerCard({ prayer }: PrayerCardProps): ReactNode {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="col col--12 margin-bottom--md">
      <div className="card">
        <div className="card__body">
          <h4 className="margin-bottom--sm">{prayer.metadata.title}</h4>
          <p className="text--muted margin-bottom--sm">
            {prayer.metadata.description}
          </p>
          
          <button
            className="button button--outline button--sm"
            onClick={toggleExpanded}
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
                  {prayer.translations.en.text}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}