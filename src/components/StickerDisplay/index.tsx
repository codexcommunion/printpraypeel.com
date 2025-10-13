import type { ReactNode } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import StickerCard from '../StickerCard';

interface DownloadFormat {
  type: 'pdf' | 'svg' | 'docx' | 'png';
  label: string;
  path: string;
}

interface StickerDisplayProps {
  imagePath: string;
  title: string;
  size: string;
  layout: string;
  difficulty: string;
  downloadFormats: DownloadFormat[];
  basePath?: string; // Optional base path for resolving relative paths
}

export default function StickerDisplay({ 
  imagePath, 
  title, 
  size, 
  layout, 
  difficulty, 
  downloadFormats,
  basePath = 'mary' // Default to mary for now, but can be overridden
}: StickerDisplayProps): ReactNode {
  // Handle relative paths by trying to require the image directly
  let resolvedImagePath: string;
  
  try {
    // If it's a relative path starting with './', try to require it directly
    if (imagePath.startsWith('./')) {
      // This will work when the component is used from MDX files in the stickers directory
      resolvedImagePath = require(`@site/stickers/${basePath}/${imagePath.substring(2)}`).default;
    } else {
      // For absolute paths, use useBaseUrl
      resolvedImagePath = useBaseUrl(imagePath);
    }
  } catch (error) {
    console.warn(`Could not resolve image path: ${imagePath} with basePath: ${basePath}`, error);
    // Fallback to useBaseUrl
    resolvedImagePath = useBaseUrl(imagePath);
  }
  
  // Convert the props to match StickerCard's expected format
  const stickerData = {
    id: 'current-sticker',
    title,
    description: '', // No description needed for detail view
    permalink: '', // No permalink needed for detail view
    imagePath: resolvedImagePath,
    frontMatter: {
      size,
      printLayout: layout,
      difficulty
    }
  };

  // Convert download formats to include full URLs
  const formatsWithUrls = downloadFormats.map(format => ({
    ...format,
    path: format.path.startsWith('./') 
      ? (() => {
          try {
            return require(`@site/stickers/${basePath}/${format.path.substring(2)}`).default;
          } catch {
            return useBaseUrl(format.path);
          }
        })()
      : useBaseUrl(format.path)
  }));
  
  return (
    <StickerCard 
      sticker={stickerData}
      showDownloads={true}
      downloadFormats={formatsWithUrls}
      layout="detail"
    />
  );
}