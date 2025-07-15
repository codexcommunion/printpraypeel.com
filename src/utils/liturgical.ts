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

export function getLiturgicalColorScheme(liturgicalColor: string): { primary: string; primaryDark: string; primaryLight: string } {
  switch (liturgicalColor.toLowerCase()) {
    case 'red':
      return {
        primary: '#dc2626', // red-600
        primaryDark: '#b91c1c', // red-700
        primaryLight: '#ef4444' // red-500
      };
    case 'purple':
    case 'violet':
      return {
        primary: '#7c3aed', // violet-600
        primaryDark: '#6d28d9', // violet-700
        primaryLight: '#8b5cf6' // violet-500
      };
    case 'white':
      return {
        primary: '#374151', // gray-700 (readable on white)
        primaryDark: '#1f2937', // gray-800
        primaryLight: '#4b5563' // gray-600
      };
    case 'gold':
      return {
        primary: '#d97706', // amber-600
        primaryDark: '#b45309', // amber-700
        primaryLight: '#f59e0b' // amber-500
      };
    case 'rose':
    case 'pink':
      return {
        primary: '#e11d48', // rose-600
        primaryDark: '#be185d', // rose-700
        primaryLight: '#f43f5e' // rose-500
      };
    case 'green':
    default:
      return {
        primary: '#16a34a', // green-600
        primaryDark: '#15803d', // green-700
        primaryLight: '#22c55e' // green-500
      };
  }
}

export function generateLiturgicalCSS(liturgicalInfo: LiturgicalInfo): string {
  const colorScheme = getLiturgicalColorScheme(liturgicalInfo.color);
  
  return `
    :root {
      --ifm-color-primary: ${colorScheme.primary};
      --ifm-color-primary-dark: ${colorScheme.primaryDark};
      --ifm-color-primary-darker: ${colorScheme.primaryDark};
      --ifm-color-primary-darkest: ${colorScheme.primaryDark};
      --ifm-color-primary-light: ${colorScheme.primaryLight};
      --ifm-color-primary-lighter: ${colorScheme.primaryLight};
      --ifm-color-primary-lightest: ${colorScheme.primaryLight};
      --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
    }
    
    [data-theme='dark'] {
      --ifm-color-primary: ${colorScheme.primaryLight};
      --ifm-color-primary-dark: ${colorScheme.primary};
      --ifm-color-primary-darker: ${colorScheme.primaryDark};
      --ifm-color-primary-darkest: ${colorScheme.primaryDark};
      --ifm-color-primary-light: ${colorScheme.primaryLight};
      --ifm-color-primary-lighter: ${colorScheme.primaryLight};
      --ifm-color-primary-lightest: ${colorScheme.primaryLight};
      --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
    }
  `;
}
