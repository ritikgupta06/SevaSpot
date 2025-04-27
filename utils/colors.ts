export const colors = {
  primary: {
    main: '#007AFF',
    light: '#4DA2FF',
    dark: '#0062CC',
    background: '#E5F2FF',
    text: '#FFFFFF',
  },
  secondary: {
    main: '#34C759',
    light: '#6AD987',
    dark: '#28A046',
    background: '#E3F8EA',
    text: '#FFFFFF',
  },
  accent: {
    main: '#FF9500',
    light: '#FFAC33',
    dark: '#CC7600',
    background: '#FFF2E0',
    text: '#FFFFFF',
  },
  error: {
    main: '#FF3B30',
    light: '#FF6159',
    dark: '#CC2F26',
    background: '#FFE5E3',
    text: '#FFFFFF',
  },
  warning: {
    main: '#FFCC00',
    light: '#FFD633',
    dark: '#CCA300',
    background: '#FFF8E0',
    text: '#000000',
  },
  success: {
    main: '#34C759',
    light: '#6AD987',
    dark: '#28A046',
    background: '#E3F8EA',
    text: '#FFFFFF',
  },
  neutral: {
    50: '#F9F9FB',
    100: '#F2F2F7',
    200: '#E5E5EA',
    300: '#D1D1D6',
    400: '#C7C7CC',
    500: '#AEAEB2',
    600: '#8E8E93',
    700: '#636366',
    800: '#3A3A3C',
    900: '#1C1C1E',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F2F2F7',
    tertiary: '#E5E5EA',
  },
  text: {
    primary: '#000000',
    secondary: '#3A3A3C',
    tertiary: '#8E8E93',
    disabled: '#C7C7CC',
    inverse: '#FFFFFF',
  },
};

export const getCategoryColor = (colorName: string): string => {
  return colorName || colors.primary.main;
};