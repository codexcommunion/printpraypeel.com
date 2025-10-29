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
    let printReady: boolean = false;
    let paperSize: string | undefined;
    let layoutInfo: string | undefined;

    if (typeof format === 'object') {
      // Handle formats like { svg: "./file.svg" } or enhanced format with printReady info
      if (format.type && format.path && format.label) {
        // Already in the right format with explicit properties
        type = format.type;
        path = format.path;
        label = format.label;
        printReady = format.printReady || false;
        paperSize = format.paperSize;
        layoutInfo = format.layout;
      } else {
        // Handle { svg: "./file.svg" } or enhanced { pdf: { path: "...", printReady: true, ... } } format
        const [formatType, formatValue] = Object.entries(format)[0] as [string, any];

        // Extract base type for icon (everything before first underscore)
        type = formatType.split('_')[0];

        if (typeof formatValue === 'string') {
          // Simple format: { svg: "./file.svg" }
          path = formatValue;
          
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
        } else if (typeof formatValue === 'object') {
          // Enhanced format: { pdf: { path: "...", printReady: true, paperSize: "...", layout: "..." } }
          path = formatValue.path;
          printReady = formatValue.printReady || false;
          paperSize = formatValue.paperSize;
          layoutInfo = formatValue.layout;
          
          // Generate label - use provided label or create one
          if (formatValue.label) {
            label = formatValue.label;
          } else if (printReady) {
            label = `Print Ready ${type.toUpperCase()}`;
          } else {
            label = formatType.toUpperCase();
          }
        } else {
          return null; // Skip invalid formats
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
      path: resolvedPath,
      printReady,
      paperSize,
      layout: layoutInfo
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