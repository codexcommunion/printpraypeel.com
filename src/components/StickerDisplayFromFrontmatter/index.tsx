import type { ReactNode } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import StickerCard from '../StickerCard';

interface StickerDisplayFromFrontmatterProps {
  stickerId: string; // e.g., "mary/our-lady-of-grace"
  imagePath: string; // Still need this for the image resolution
  basePath: string;  // Still need this for path resolution
}

export default function StickerDisplayFromFrontmatter({
  stickerId,
  imagePath,
  basePath
}: StickerDisplayFromFrontmatterProps): ReactNode {
  // Access frontmatter data from the plugin (same as FeaturedStickers)
  const frontmatterData = usePluginData('stickers-frontmatter-plugin') as any;

  // Get the frontmatter for this specific sticker
  const frontMatter = frontmatterData?.[stickerId];

  if (!frontMatter) {
    console.warn(`No frontmatter found for sticker: ${stickerId}`);
    return <div>Sticker data not found</div>;
  }

  // Resolve the image path (similar to StickerDisplay logic)
  let resolvedImagePath: string;

  try {
    if (imagePath.startsWith('./')) {
      resolvedImagePath = require(`@site/stickers/${basePath}/${imagePath.substring(2)}`).default;
    } else {
      resolvedImagePath = imagePath;
    }
  } catch (error) {
    console.warn(`Could not resolve image path: ${imagePath} with basePath: ${basePath}`, error);
    resolvedImagePath = imagePath;
  }

  // Convert frontmatter downloadFormats to the format expected by StickerCard
  const downloadFormats = frontMatter.downloadFormats?.map((format: any) => {
    // Handle different frontmatter format structures
    let type: string;
    let path: string;
    let label: string;

    if (typeof format === 'object') {
      // Handle formats like { svg: "./file.svg" } or { type: "pdf", path: "./file.pdf", label: "..." }
      if (format.type && format.path && format.label) {
        // Already in the right format
        type = format.type;
        path = format.path;
        label = format.label;
      } else {
        // Handle { svg: "./file.svg" } format
        const [formatType, formatPath] = Object.entries(format)[0] as [string, string];

        // Extract base type for icon (everything before first underscore)
        type = formatType.split('_')[0];
        path = formatPath;

        // Generate a label based on the full key
        if (formatType.includes('colorized')) {
          label = 'Colorized Version';
        } else if (formatType.includes('clear')) {
          label = 'Clear Version';
        } else if (formatType.includes('alt')) {
          label = 'Alternative Version';
        } else if (formatType === 'svg') {
          label = 'Vector Format';
        } else if (formatType === 'docx') {
          label = 'Word Document';
        } else {
          label = formatType.toUpperCase();
        }
      }
    } else {
      return null; // Skip invalid formats
    }

    // Resolve the path
    let resolvedPath: string;
    try {
      if (path.startsWith('./')) {
        resolvedPath = require(`@site/stickers/${basePath}/${path.substring(2)}`).default;
      } else {
        resolvedPath = path;
      }
    } catch {
      resolvedPath = path; // Fallback to original path
    }

    return {
      type: type as 'pdf' | 'svg' | 'docx' | 'png',
      label,
      path: resolvedPath
    };
  }).filter(Boolean) || []; // Remove null entries

  // Create the sticker data object
  const stickerData = {
    id: stickerId,
    title: frontMatter.title || 'Untitled Sticker',
    description: frontMatter.description || '',
    permalink: `/stickers/${stickerId}`,
    imagePath: resolvedImagePath,
    frontMatter: frontMatter
  };

  return (
    <StickerCard
      sticker={stickerData}
      showDownloads={true}
      downloadFormats={downloadFormats}
      layout="detail"
    />
  );
}