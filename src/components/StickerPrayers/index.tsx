import type { ReactNode } from 'react';
import PrayerCard from '../PrayerCard';
// Import prayers from the collection
import hailMary from '@codexcommunion/prayer-collection/prayers/core/hail-mary.json';
import ourFather from '@codexcommunion/prayer-collection/prayers/core/our-father.json';
import gloryBe from '@codexcommunion/prayer-collection/prayers/core/glory-be.json';
import angelus from '@codexcommunion/prayer-collection/prayers/marian/angelus.json';
import hailHolyQueen from '@codexcommunion/prayer-collection/prayers/marian/hail-holy-queen.json';
import memorare from '@codexcommunion/prayer-collection/prayers/marian/memorare.json';
import stMichaelPrayer from '@codexcommunion/prayer-collection/prayers/saints/st-michael-prayer.json';
import actOfContrition from '@codexcommunion/prayer-collection/prayers/penitential/act-of-contrition.json';

interface StickerPrayersProps {
  prayerTypes: ('core' | 'marian' | 'saints' | 'penitential')[];
  description?: string;
}

const prayersByType = {
  core: [hailMary, ourFather, gloryBe],
  marian: [hailMary, angelus, hailHolyQueen, memorare],
  saints: [stMichaelPrayer],
  penitential: [actOfContrition]
};

export default function StickerPrayers({ prayerTypes, description }: StickerPrayersProps): ReactNode {
  // Get unique prayers based on the requested types
  const selectedPrayers = prayerTypes.flatMap(type => prayersByType[type] || []);
  
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