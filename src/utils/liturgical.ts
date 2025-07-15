import { calendarFor, LiturgicalColors } from 'romcal';

export interface LiturgicalInfo {
  color: string;
  season: string;
  celebration: string;
  rank: string;
}

export function getCurrentLiturgicalInfo(): LiturgicalInfo {
  try {
    const today = new Date();
    
    // Get the liturgical calendar for the current year
    const calendar = calendarFor(today.getFullYear());
    
    // Find today's celebration
    const todayKey = today.toISOString().split('T')[0];
    const todaysCelebrations = calendar.filter(day => 
      day.date.toISOString().split('T')[0] === todayKey
    );
    
    if (todaysCelebrations.length > 0) {
      const celebration = todaysCelebrations[0];
      return {
        color: celebration.liturgicalColor?.name || 'green',
        season: celebration.season || 'ordinary',
        celebration: celebration.name || 'Ordinary Time',
        rank: celebration.rank || 'weekday'
      };
    }
    
    // Fallback to Ordinary Time (green)
    return {
      color: 'green',
      season: 'ordinary',
      celebration: 'Ordinary Time',
      rank: 'weekday'
    };
    
  } catch (error) {
    console.warn('Error getting liturgical info:', error);
    // Fallback to Ordinary Time (green)
    return {
      color: 'green',
      season: 'ordinary',
      celebration: 'Ordinary Time',
      rank: 'weekday'
    };
  }
}

export function getLiturgicalColorScheme(liturgicalColor: string): { primary: string; primaryDark: string; primaryDarker: string; primaryDarkest: string; primaryLight: string; primaryLighter: string; primaryLightest: string } {
  switch (liturgicalColor.toLowerCase()) {
    case 'red':
      return {
        primary: 'var(--color-liturgical-red-500)',
        primaryDark: 'var(--color-liturgical-red-600)',
        primaryDarker: 'var(--color-liturgical-red-700)',
        primaryDarkest: 'var(--color-liturgical-red-800)',
        primaryLight: 'var(--color-liturgical-red-400)',
        primaryLighter: 'var(--color-liturgical-red-300)',
        primaryLightest: 'var(--color-liturgical-red-200)'
      };
    case 'purple':
    case 'violet':
      return {
        primary: 'var(--color-liturgical-purple-500)',
        primaryDark: 'var(--color-liturgical-purple-600)',
        primaryDarker: 'var(--color-liturgical-purple-700)',
        primaryDarkest: 'var(--color-liturgical-purple-800)',
        primaryLight: 'var(--color-liturgical-purple-400)',
        primaryLighter: 'var(--color-liturgical-purple-300)',
        primaryLightest: 'var(--color-liturgical-purple-200)'
      };
    case 'white':
      return {
        primary: 'var(--color-liturgical-white)',
        primaryDark: 'var(--color-liturgical-white)',
        primaryDarker: 'var(--color-liturgical-white)',
        primaryDarkest: 'var(--color-liturgical-white)',
        primaryLight: 'var(--color-liturgical-white)',
        primaryLighter: 'var(--color-liturgical-white)',
        primaryLightest: 'var(--color-liturgical-white)'
      };
    case 'gold':
      return {
        primary: 'var(--color-liturgical-gold-500)',
        primaryDark: 'var(--color-liturgical-gold-600)',
        primaryDarker: 'var(--color-liturgical-gold-700)',
        primaryDarkest: 'var(--color-liturgical-gold-800)',
        primaryLight: 'var(--color-liturgical-gold-400)',
        primaryLighter: 'var(--color-liturgical-gold-300)',
        primaryLightest: 'var(--color-liturgical-gold-200)'
      };
    case 'rose':
    case 'pink':
      return {
        primary: 'var(--color-liturgical-rose-500)',
        primaryDark: 'var(--color-liturgical-rose-600)',
        primaryDarker: 'var(--color-liturgical-rose-700)',
        primaryDarkest: 'var(--color-liturgical-rose-800)',
        primaryLight: 'var(--color-liturgical-rose-400)',
        primaryLighter: 'var(--color-liturgical-rose-300)',
        primaryLightest: 'var(--color-liturgical-rose-200)'
      };
    case 'green':
    default:
      return {
        primary: 'var(--color-liturgical-green-500)',
        primaryDark: 'var(--color-liturgical-green-600)',
        primaryDarker: 'var(--color-liturgical-green-700)',
        primaryDarkest: 'var(--color-liturgical-green-800)',
        primaryLight: 'var(--color-liturgical-green-400)',
        primaryLighter: 'var(--color-liturgical-green-300)',
        primaryLightest: 'var(--color-liturgical-green-200)'
      };
  }
}

export function generateLiturgicalCSS(liturgicalInfo: LiturgicalInfo): string {
  const colorScheme = getLiturgicalColorScheme(liturgicalInfo.color);
  
  return `
    :root {
      --ifm-color-primary: ${colorScheme.primary};
      --ifm-color-primary-dark: ${colorScheme.primaryDark};
      --ifm-color-primary-darker: ${colorScheme.primaryDarker};
      --ifm-color-primary-darkest: ${colorScheme.primaryDarkest};
      --ifm-color-primary-light: ${colorScheme.primaryLight};
      --ifm-color-primary-lighter: ${colorScheme.primaryLighter};
      --ifm-color-primary-lightest: ${colorScheme.primaryLightest};
      --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
    }
    
    [data-theme='dark'] {
      --ifm-color-primary: ${colorScheme.primaryLight};
      --ifm-color-primary-dark: ${colorScheme.primary};
      --ifm-color-primary-darker: ${colorScheme.primaryDark};
      --ifm-color-primary-darkest: ${colorScheme.primaryDarker};
      --ifm-color-primary-light: ${colorScheme.primaryLighter};
      --ifm-color-primary-lighter: ${colorScheme.primaryLightest};
      --ifm-color-primary-lightest: ${colorScheme.primaryLightest};
      --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
    }
  `;
}
