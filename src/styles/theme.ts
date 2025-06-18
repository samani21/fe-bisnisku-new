// theme.ts
export const theme = {
    colors: {
        primary: '#1F3A93',
        secondary: '#F5B041',
        primaryDark: '#2C3E50',
        primaryLight: '#FAFAFA',
        textMain: '#1A1A1A',
        textSecondary: '#7F8C8D',
        background: '#F9FAFB',
        cardBg: '#FFFFFF',
        border: '#e4ebf5',
        borderSecondary: '#E0E0E0',
        error: '#E74C3C',
        seuccess: '#27AE60',
        hover: '#3498DB',
        button: '#8E44AD',
    },
    radius: '8px',
    transition: 'all 0.2s ease-in-out',
    font: `'Inter', sans-serif`,
};

export type ThemeType = typeof theme;
