'use client';

import { usePathname } from 'next/navigation';

import styled, { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '../../lib/registry';

import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/themes';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main';
  grid-template-rows: 60px auto;
  grid-template-columns: 240px auto;
  grid-gap: 40px 0;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;
  box-shadow:
    1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px 0 rgba(0, 0, 0, 0.02);
`;

const Page = styled.main`
  grid-area: main;
  padding: 0 40px;
`;

export default function LayoutContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const makeTitle = (fullPath: string) => {
    const path = fullPath.split('/')[1] || 'home';

    return path.split('-').map((word) => word[0].toLocaleUpperCase() + word.slice(1));
  };

  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Page>
            <h1>{makeTitle(pathname)}</h1>
            {children}
          </Page>
        </Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
