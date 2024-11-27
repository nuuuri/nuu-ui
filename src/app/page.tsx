'use client';

import { styled } from 'styled-components';

const Container = styled.div`
  background: ${(props) => props.theme.colors.blue100};
`;

export default function Home() {
  return <Container>home</Container>;
}
