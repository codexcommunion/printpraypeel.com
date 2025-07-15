import React, { useEffect, useState } from 'react';
import { getCurrentLiturgicalInfo, generateLiturgicalCSS, type LiturgicalInfo } from '@site/src/utils/liturgical';

export default function LiturgicalTheme(): React.ReactElement {
  const [liturgicalInfo, setLiturgicalInfo] = useState<LiturgicalInfo | null>(null);

  useEffect(() => {
    // Get current liturgical info
    const info = getCurrentLiturgicalInfo();
    setLiturgicalInfo(info);

    // Generate and apply CSS
    const css = generateLiturgicalCSS(info);
    
    // Remove any existing liturgical style
    const existingStyle = document.getElementById('liturgical-theme');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    // Add new liturgical style
    const style = document.createElement('style');
    style.id = 'liturgical-theme';
    style.textContent = css;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="liturgical-info" style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px', 
      background: 'var(--ifm-color-emphasis-200)', 
      padding: '0.5rem', 
      borderRadius: '4px',
      fontSize: '0.8rem',
      opacity: 0.8,
      zIndex: 1000
    }}>
      {liturgicalInfo && (
        <div>
          <div><strong>Liturgical Season:</strong> {liturgicalInfo.season}</div>
          <div><strong>Color:</strong> {liturgicalInfo.color}</div>
          <div><strong>Celebration:</strong> {liturgicalInfo.celebration}</div>
        </div>
      )}
    </div>
  );
}
