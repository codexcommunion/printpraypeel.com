import type { ReactNode } from 'react';
import PrayerCard from '../PrayerCard';
// Import prayers using the new API
import { getPrayersByLabel, type Label } from '@codexcommunion/prayer-collection';

interface StickerPrayersProps {
  prayerTypes: Label[];
  description?: string;
}

export default function StickerPrayers({ prayerTypes, description }: StickerPrayersProps): ReactNode {
  // Get prayers dynamically based on requested types using the API
  const selectedPrayers = prayerTypes.flatMap(type => getPrayersByLabel(type));
  
  // Remove duplicates based on prayer ID
  const uniquePrayers = selectedPrayers.filter((prayer, index, self) => 
    index === self.findIndex(p => p.metadata.id === prayer.metadata.id)
  );

  return (
    <div className="margin-bottom--xl">
      {description && (
        <p className="margin-bottom--lg">{description}</p>
      )}
      
      <div className="row">
        <div className="col col--12">
          <div className="row">
            {uniquePrayers.map((prayer: any) => (
              <PrayerCard key={prayer.metadata.id} prayer={prayer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}