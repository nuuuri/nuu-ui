'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-right: 1px solid #e2e2e2;
`;

export default function Sidebar() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => await fetch('/ui').then((res) => res.json());

    fetchPages()
      .then((res) => setPages(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      {pages.map((page) => (
        <Link key={page} href={`/${page}`}>
          <button>{page}</button>
        </Link>
      ))}
    </Container>
  );
}
