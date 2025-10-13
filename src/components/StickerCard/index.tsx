import React from 'react';
import Link from '@docusaurus/Link';
import { IconPrinter, IconCalendar, IconFileTypePdf, IconFileTypeDocx, IconFileTypeSvg, IconPhoto } from '@tabler/icons-react';
import DifficultyIndicator from '../DifficultyIndicator';
import SizeIndicator from '../SizeIndicator';
import styles from './styles.module.css';

interface StickerCardProps {
  sticker: {
    id: string;
    title: string;
    description: string;
    permalink: string;
    imagePath: string;
    frontMatter: any;
  };
  showDownloads?: boolean;
  downloadFormats?: Array<{
    type: 'pdf' | 'svg' | 'docx' | 'png';
    label: string;
    path: string;
  }>;
  layout?: 'carousel' | 'detail';
}

const getFormatIcon = (type: string): React.ReactElement => {
  const iconProps = {
    size: 18,
    stroke: 1.5,
    className: styles.fileIcon
  };

  switch (type) {
    case 'pdf': return <IconFileTypePdf {...iconProps} />;
    case 'svg': return <IconFileTypeSvg {...iconProps} />;
    case 'docx': return <IconFileTypeDocx {...iconProps} />;
    case 'png': return <IconPhoto {...iconProps} />;
    default: return <IconPhoto {...iconProps} />;
  }
};

export default function StickerCard({
  sticker,
  showDownloads = false,
  downloadFormats = [],
  layout = 'carousel'
}: StickerCardProps): React.JSX.Element {
  const isDetailView = layout === 'detail';

  return (
    <div className={`${styles.stickerCard} ${isDetailView ? styles.detailView : styles.carouselView}`}>
      {/* Header section */}
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{sticker.title}</h3>
        <div className={styles.cardDescription}>
          {sticker.description}
        </div>
      </div>

      {/* Content layout */}
      <div className={styles.cardContent}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img
              src={sticker.imagePath}
              alt={sticker.title}
              className={styles.stickerImage}
            />
          </div>

          {!isDetailView && (
            <Link to={sticker.permalink} className={styles.viewButton}>
              View Sticker & Download
            </Link>
          )}
        </div>

        <div className={styles.metadataSection}>
          {sticker.frontMatter?.difficulty && (
            <DifficultyIndicator difficulty={sticker.frontMatter.difficulty as 'beginner' | 'intermediate' | 'advanced'} />
          )}

          {sticker.frontMatter?.size && (
            <SizeIndicator size={sticker.frontMatter.size} />
          )}

          {sticker.frontMatter?.printLayout && (
            <div className={styles.metadataItem}>
              <IconPrinter
                size={18}
                stroke={1.5}
                className={styles.metadataIcon}
              />
              <span>{sticker.frontMatter.printLayout}</span>
            </div>
          )}



          {sticker.frontMatter?.feastDay && (
            <div className={styles.metadataItem}>
              <IconCalendar
                size={18}
                stroke={1.5}
                className={styles.metadataIcon}
              />
              <span>Feast Day: {sticker.frontMatter.feastDay}</span>
            </div>
          )}

          {sticker.frontMatter?.bibleVerses && sticker.frontMatter.bibleVerses.length > 0 && (
            <div className={styles.scriptureSection}>
              <div className={styles.scriptureTitle}>
                Related Scripture
              </div>
              <div className={styles.scriptureLinks}>
                {sticker.frontMatter.bibleVerses.map((verse, index) => {
                  // Convert verse reference to USCCB URL format
                  // Examples: "Genesis 3:15" -> "genesis/3:15"
                  //          "Luke 1:26-38" -> "luke/1:26-38" 
                  //          "John 19:25–27" -> "john/19:25-27"
                  //          "Revelation 12:1-17" -> "revelation/12:1-17"
                  const urlVerse = verse
                    .toLowerCase()
                    .replace(/\s+/g, '/') // Replace spaces with forward slash
                    .replace(/–/g, '-')   // Replace em dash with hyphen
                    .replace(/:/g, ':');  // Keep colons as is

                  return (
                    <span key={index}>
                      <a
                        href={`https://bible.usccb.org/bible/${urlVerse}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {verse}
                      </a>
                      {index < sticker.frontMatter.bibleVerses.length - 1 && ', '}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {sticker.frontMatter?.tags && (
            <div className={styles.tagsSection}>
              <div className={styles.tagsTitle}>
                Tags
              </div>
              <div className={styles.tagLinks}>
                {sticker.frontMatter.tags.slice(0, 3).map((tag, index) => (
                  <Link
                    key={index}
                    to={`/stickers/tags/${tag}`}
                  >
                    {tag.replace('-', ' ')}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Downloads section as footer - only show in detail view */}
      {showDownloads && downloadFormats.length > 0 && isDetailView && (
        <div className={styles.downloadFooter}>
          <h4>Available Files</h4>
          <div className={styles.downloadLinks}>
            {downloadFormats.map((format, index) => (
              <a key={index} href={format.path} download className={styles.downloadLink}>
                {getFormatIcon(format.type)} {format.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}