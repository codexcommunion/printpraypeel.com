import type { ReactNode } from 'react';
import { useState } from 'react';
import Link from '@docusaurus/Link';

export default function StickerDiscoveryBanner(): ReactNode {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="alert alert--primary" style={{ margin: 0, borderRadius: 0, position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🏷️</span>
            <strong>Did someone give you a sticker?</strong>
            <span>They were praying for you while making it - you've received a prayer across time!</span>
          </div>
          <Link
            className="button button--outline button--sm"
            to="/for-recipients"
            style={{ marginLeft: 'auto' }}>
            Learn More →
          </Link>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            opacity: 0.7,
            padding: '0.25rem',
            borderRadius: '4px'
          }}
          onMouseEnter={(e) => (e.target as HTMLButtonElement).style.opacity = '1'}
          onMouseLeave={(e) => (e.target as HTMLButtonElement).style.opacity = '0.7'}>
          ×
        </button>
      </div>
    </div>
  );
}