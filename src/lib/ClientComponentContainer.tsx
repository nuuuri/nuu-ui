'use client';

import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from './registry';

import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/themes';

export default function ClientComponentContainer({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
