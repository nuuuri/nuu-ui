'use client';

import styled from 'styled-components';

import { DropdownPlacementType } from './type';

import Dropdown from '.';

import { flexbox } from '@/styles/themes/flexbox';

const Box = styled.div`
  ${flexbox('row', 'left')}
  gap: 5px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
`;

export default function DropdownPage() {
  const placements: DropdownPlacementType[] = [
    'bottomLeft',
    'bottom',
    'bottomRight',
    'topLeft',
    'top',
    'topRight',
  ];

  const dummyItems = [
    {
      key: '1',
      label: '1st menu item',
    },
    {
      key: '2',
      label: '2nd menu item',
    },
    {
      key: '3',
      label: '3rd menu item',
      onClick: () => console.log('click 3rd menu item'),
    },
    {
      key: '4',
      label: (
        <a
          href="https://www.youtube.com/"
          rel="noopener noreferrer"
          target="_blank">
          go to youtube
        </a>
      ),
    },
    {
      key: '5',
      label: <button>hello</button>,
    },
  ];

  return (
    <div>
      <h3>default</h3>
      <Dropdown items={dummyItems}>
        <Button>default</Button>
      </Dropdown>
      <h3>placement</h3>
      <div>
        <Box>
          {placements.map((placement) => (
            <Dropdown key={placement} items={dummyItems} placement={placement}>
              <Button>{placement}</Button>
            </Dropdown>
          ))}
        </Box>
      </div>
      <h3>arrow</h3>
      <div>
        <Box>
          {placements.map((placement) => (
            <Dropdown
              key={placement}
              arrow
              items={dummyItems}
              placement={placement}>
              <Button>{placement}</Button>
            </Dropdown>
          ))}
        </Box>
      </div>
    </div>
  );
}
