const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Docusaurus plugin to expose stickers frontmatter data to components
 */
module.exports = function stickersFrontmatterPlugin(context, options) {
  return {
    name: 'stickers-frontmatter-plugin',
    
    async loadContent() {
      console.log('Loading stickers frontmatter content...');
      const stickersPath = path.join(context.siteDir, 'stickers');
      const frontmatterData = {};

      // Recursively read all MDX files in stickers directory
      function readMdxFiles(dir, relativePath = '') {
        if (!fs.existsSync(dir)) {
          console.log(`Stickers directory not found: ${dir}`);
          return;
        }

        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const fullPath = path.join(dir, file);
          const relativeFilePath = path.join(relativePath, file).replace(/\\/g, '/');
          
          if (fs.statSync(fullPath).isDirectory()) {
            // Skip directories that should be ignored
            if (file === 'source' || file === 'wip' || file === 'drafts' || file === 'work-in-progress') {
              return;
            }
            readMdxFiles(fullPath, relativeFilePath);
          } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
            // Skip design files that might be mixed in
            if (file.match(/\.(xcf|psd|ai|sketch|fig|gimp|bak|tmp)$/i)) {
              return;
            }
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              const { data: frontMatter } = matter(content);
              
              // Create key from relative path without extension
              const key = relativeFilePath.replace(/\.(mdx?|md)$/, '');
              frontmatterData[key] = frontMatter;
              
              console.log(`Loaded frontmatter for ${key}:`, {
                title: frontMatter.title,
                featured: frontMatter.featured,
                difficulty: frontMatter.difficulty,
                categories: frontMatter.categories,
                tags: frontMatter.tags
              });
            } catch (error) {
              console.error(`Error reading ${fullPath}:`, error);
            }
          }
        });
      }

      readMdxFiles(stickersPath);
      
      console.log(`Loaded frontmatter for ${Object.keys(frontmatterData).length} stickers`);
      return frontmatterData;
    },
    
    async contentLoaded({content, actions}) {
      const {setGlobalData} = actions;
      console.log('Setting global data for stickers frontmatter plugin');
      setGlobalData(content);
    },
  };
};