import { ThemeProvider } from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../src/lib/theme';

const withThemeProvider = (Story, context) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </EmotionThemeProvider>
  );
};

export const decorators = [withThemeProvider];
