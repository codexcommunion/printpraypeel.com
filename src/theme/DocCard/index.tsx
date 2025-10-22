import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  findFirstSidebarItemLink,
  useDocById,
} from '@docusaurus/plugin-content-docs/client';
import {usePluralForm} from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';
import {usePluginData} from '@docusaurus/useGlobalData';

import type {Props} from '@theme/DocCard';

import Heading from '@theme/Heading';
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

import styles from './styles.module.css';

function useCategoryItemsPlural() {
  const {selectMessage} = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        {count},
      ),
    );
}

function CardContainer({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}

function CardLayout({
  href,
  icon,
  title,
  description,
  image,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description?: string;
  image?: string;
}): React.JSX.Element {
  return (
    <CardContainer href={href}>
      {image ? (
        <div className={styles.cardImage}>
          <img src={image} alt={title} loading="lazy" />
        </div>
      ) : (
        <Heading
          as="h2"
          className={clsx('text--truncate', styles.cardTitle)}
          title={title}>
          {icon} {title}
        </Heading>
      )}
      {!image && description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}>
          {description}
        </p>
      )}
      {image && (
        <>
          <Heading
            as="h3"
            className={clsx('text--truncate', styles.cardTitleWithImage)}
            title={title}>
            {title}
          </Heading>
          {description && (
            <p
              className={clsx('text--truncate', styles.cardDescription)}
              title={description}>
              {description}
            </p>
          )}
        </>
      )}
    </CardContainer>
  );
}

function CardCategory({
  item,
}: {
  item: PropSidebarItemCategory;
}): React.JSX.Element | null {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}

function CardLink({item}: {item: PropSidebarItemLink}): React.JSX.Element {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  
  // Try to get frontmatter from the stickers plugin
  const stickersFrontmatter = (usePluginData('stickers-frontmatter-plugin') as any) || {};
  const pluginFrontMatter = stickersFrontmatter[item.docId];
  
  // Get image from plugin frontMatter or doc frontMatter
  let rawImage = pluginFrontMatter?.previewImage || pluginFrontMatter?.image || 
                 (doc as any)?.frontMatter?.previewImage || (doc as any)?.frontMatter?.image;
  
  let image: string | undefined = undefined;
  
  // Try to load the image using require (for webpack processing)
  if (rawImage && rawImage.startsWith('./')) {
    try {
      const docPath = item.docId || '';
      const pathParts = docPath.split('/');
      const dirPath = pathParts.slice(0, -1).join('/');
      const imagePath = rawImage.substring(2); // Remove './'
      const fullPath = `@site/stickers/${dirPath}/${imagePath}`;
      
      console.log('🔍 DocCard trying to require:', fullPath);
      // Use dynamic require - webpack will bundle this
      image = require(`@site/stickers/${dirPath}/${imagePath}`).default;
      console.log('🔍 Successfully loaded image:', image);
    } catch (e) {
      console.log('🔍 Failed to require image:', e);
      // Fallback to direct path
      const docPath = item.docId || '';
      const docDir = docPath.substring(0, docPath.lastIndexOf('/'));
      image = `/stickers/${docDir}/${rawImage.substring(2)}`;
    }
  } else if (rawImage) {
    image = rawImage;
  }
  
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? (doc as any)?.description}
      image={image}
    />
  );
}

export default function DocCard({item}: Props): React.JSX.Element {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
