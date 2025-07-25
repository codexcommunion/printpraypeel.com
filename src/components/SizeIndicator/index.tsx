import React from 'react';
import { IconRuler } from '@tabler/icons-react';
import styles from './styles.module.css';

interface SizeIndicatorProps {
  size: string;
}

const convertToMetric = (sizeInches: string): string => {
  // Extract number from string like "2.5 inches wide"
  const match = sizeInches.match(/(\d+\.?\d*)/);
  if (match) {
    const inches = parseFloat(match[1]);
    const cm = (inches * 2.54).toFixed(1);
    return `${cm} cm`;
  }
  return '';
};

export default function SizeIndicator({ size }: SizeIndicatorProps): React.JSX.Element {
  const metricSize = convertToMetric(size);

  return (
    <div className={styles.sizeContainer}>
      <IconRuler
        size={18}
        stroke={1.5}
        className={styles.rulerIcon}
      />
      <div className={styles.sizeText}>
        {size}
        {metricSize && (
          <span className={styles.metricText}>
            {' '}({metricSize})
          </span>
        )}
      </div>
    </div>
  );
}