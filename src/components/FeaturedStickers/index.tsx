import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { usePluginData } from '@docusaurus/useGlobalData';
import { useDocsData } from '@docusaurus/plugin-content-docs/client';
import StickerCard from '../StickerCard';
import styles from './styles.module.css';

// Helper function to get the best available image
const getStickerImage = (basePath: string, frontMatter: any) => {
    console.log(`🖼️ Getting image for basePath: "${basePath}"`);
    console.log(`   FrontMatter previewImage: "${frontMatter?.previewImage}"`);

    // If previewImage is specified in frontmatter, use that
    if (frontMatter?.previewImage) {
        const previewPath = frontMatter.previewImage.startsWith('./')
            ? frontMatter.previewImage.substring(2)
            : frontMatter.previewImage;

        try {
            // For nested directories, construct the full path
            const pathParts = basePath.split('/');
            if (pathParts.length > 1) {
                // Remove the filename part and keep the directory structure
                const dirPath = pathParts.slice(0, -1).join('/');
                const fullPreviewPath = `${dirPath}/${previewPath}`;
                console.log(`   Trying specified preview image: @site/stickers/${fullPreviewPath}`);
                return require(`@site/stickers/${fullPreviewPath}`).default;
            } else {
                console.log(`   Trying specified preview image: @site/stickers/${basePath}/${previewPath}`);
                return require(`@site/stickers/${basePath}/${previewPath}`).default;
            }
        } catch (e) {
            console.log(`   Specified preview image failed: ${e.message}`);
            // Fall back to the old logic if the specified preview image fails
        }
    }

    // Fallback to old logic if no previewImage specified or it failed
    const pathParts = basePath.split('/');
    const folderName = pathParts[pathParts.length - 2] || pathParts[pathParts.length - 1];

    console.log(`   Path parts: [${pathParts.join(', ')}]`);
    console.log(`   Folder name: "${folderName}"`);

    try {
        // Try SVG first in nested directory (e.g., saints/st_michael/st_michael.svg)
        if (pathParts.length > 1) {
            const nestedPath = `${pathParts.slice(0, -1).join('/')}/${folderName}`;
            console.log(`   Trying nested SVG: @site/stickers/${nestedPath}.svg`);
            return require(`@site/stickers/${nestedPath}.svg`).default;
        }
    } catch (e) {
        console.log(`   Nested SVG failed: ${e.message}`);
        try {
            // Try SVG at the basePath level
            console.log(`   Trying basePath SVG: @site/stickers/${basePath}.svg`);
            return require(`@site/stickers/${basePath}.svg`).default;
        } catch (e2) {
            console.log(`   BasePath SVG failed: ${e2.message}`);
            try {
                // Fallback to main PNG in nested directory
                if (pathParts.length > 1) {
                    const nestedPath = `${pathParts.slice(0, -1).join('/')}/${folderName}`;
                    console.log(`   Trying nested PNG: @site/stickers/${nestedPath}.png`);
                    return require(`@site/stickers/${nestedPath}.png`).default;
                }
            } catch (e3) {
                console.log(`   Nested PNG failed: ${e3.message}`);
                try {
                    // Fallback to main PNG at basePath
                    console.log(`   Trying basePath PNG: @site/stickers/${basePath}.png`);
                    return require(`@site/stickers/${basePath}.png`).default;
                } catch (e4) {
                    console.log(`   BasePath PNG failed: ${e4.message}`);
                    try {
                        // Fallback to alternative PNG
                        console.log(`   Trying alt PNG: @site/stickers/${basePath}_alt.png`);
                        return require(`@site/stickers/${basePath}_alt.png`).default;
                    } catch (e5) {
                        console.log(`   Alt PNG failed: ${e5.message}`);
                        console.log(`   ❌ All image loading attempts failed for: ${basePath}`);
                        // Final fallback - return a placeholder or null
                        return null;
                    }
                }
            }
        }
    }
};

export default function FeaturedStickers(): React.JSX.Element {
    console.log('=== FEATURED STICKERS DEBUG ===');

    // Access frontmatter data from the custom plugin
    const frontmatterData = usePluginData('stickers-frontmatter-plugin') as any;
    console.log('1. Plugin frontmatter data:', frontmatterData);

    // Get basic docs data for structure
    const docsData = useDocsData('stickers') as any;
    console.log('2. Docs data:', docsData);

    let featuredStickers: any[] = [];

    try {
        // Get all docs from the current version
        const allDocs = docsData?.versions?.[0]?.docs || {};
        const docsArray = Object.values(allDocs);
        console.log('3. Docs array:', docsArray.map((doc: any) => ({
            id: doc?.id,
            path: doc?.path,
            permalink: doc?.permalink
        })));

        console.log('4. Available frontmatter keys:', Object.keys(frontmatterData || {}));

        // Combine docs structure with frontmatter from plugin
        featuredStickers = docsArray.filter((doc: any) => {
            const frontMatter = frontmatterData?.[doc.id];
            console.log(`5. Checking doc ${doc?.id} - frontmatter:`, frontMatter);
            console.log(`   - tags:`, frontMatter?.tags);
            console.log(`   - categories:`, frontMatter?.categories);
            return frontMatter?.featured === true && doc.id !== 'index';
        }).map((doc: any) => {
            const frontMatter = frontmatterData?.[doc.id];
            console.log(`6. Mapping doc ${doc?.id} - final frontMatter:`, frontMatter);
            return {
                id: doc.id,
                title: frontMatter?.title || doc.title,
                description: frontMatter?.description || doc.description,
                permalink: doc.permalink || `/stickers/${doc.id}`,
                imagePath: getStickerImage(doc.id, frontMatter),
                frontMatter: frontMatter
            };
        });

        console.log('6. Final featured stickers:', featuredStickers);
        console.log('7. Featured stickers count:', featuredStickers.length);

    } catch (error) {
        console.error('ERROR in FeaturedStickers component:', error);
        return (
            <div className={styles.noStickers}>
                <p>⚠️ Error loading featured stickers. Check console for details.</p>
                <details style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)' }}>
                    <summary>Error Details</summary>
                    <pre style={{ fontSize: '0.75rem', color: 'red' }}>
                        {error.toString()}
                    </pre>
                </details>
            </div>
        );
    }

    if (featuredStickers.length === 0) {
        console.log('8. No featured stickers found - showing debug info');
        return (
            <div className={styles.noStickers}>
                <p>🔧 Debugging frontmatter access - No featured stickers found</p>
                <details style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)' }}>
                    <summary>Debug Info - Check Console for Details</summary>
                    <pre style={{ fontSize: '0.75rem', overflow: 'auto' }}>
                        Docs found: {Object.keys(docsData?.versions?.[0]?.docs || {}).length}{'\n'}
                        Plugin frontmatter keys: {Object.keys(frontmatterData || {}).join(', ')}{'\n'}
                        Featured stickers: {Object.entries(frontmatterData || {}).filter(([_, fm]: [string, any]) => fm?.featured).map(([id]) => id).join(', ')}{'\n'}
                        Check browser console for detailed frontmatter debugging.
                    </pre>
                </details>
            </div>
        );
    }

    console.log('9. Rendering carousel with featured stickers');

    return (
        <div className={styles.carouselContainer}>
            <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
                className={styles.featuredCarousel}
            >
                {featuredStickers.map((sticker) => (
                    <div key={sticker.id} className={styles.carouselSlide}>
                        <StickerCard
                            sticker={sticker}
                            layout="carousel"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}