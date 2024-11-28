import styled, { css } from 'styled-components';

import { DropdownPlacement } from './type';

const getHorizontalStyle = (placement: DropdownPlacement, px: string = '0px') => {
  // left
  if (placement.endsWith('Left')) {
    return css`
      left: ${px};
    `;
  }

  // right
  if (placement.endsWith('Right')) {
    return css`
      right: ${px};
    `;
  }

  // center
  return css`
    left: 50%;
    transform: translate(-50%, 0);
  `;
};

const getVerticalStyle = (arrow: boolean, placement: DropdownPlacement) => {
  // top
  if (placement.startsWith('top'))
    return css`
      bottom: ${arrow ? 'calc(100% + 10px)' : '100%'};
    `;

  // bottom
  return css`
    top: ${arrow ? 'calc(100% + 10px)' : '100%'};
  `;
};

const getArrowStyle = (arrow: boolean, placement: DropdownPlacement, px: string, color: string) => {
  if (!arrow) {
    return css`
      display: none;
    `;
  }

  return css`
    content: '';
    position: absolute;
    border: 7px solid transparent;
    ${getHorizontalStyle(placement, '15px')}
    ${placement.startsWith('top')
      ? css`
          bottom: ${px};
          border-top: 9px solid ${color};
        `
      : css`
          top: ${px};
          border-bottom: 9px solid ${color};
        `}
  `;
};

export const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  * {
    cursor: pointer;
  }
`;

export const Menu = styled.div<{ $arrow: boolean; $placement: DropdownPlacement }>`
  position: absolute;
  min-width: 100px;
  width: max-content;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray100};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  z-index: 1;

  ${({ $placement }) => getHorizontalStyle($placement)}
  ${({ $arrow, $placement }) => getVerticalStyle($arrow, $placement)}
  
  // [TODO]: Fade In/Out Animation 적용

  &::before {
    ${({ $arrow, $placement, theme }) =>
      getArrowStyle($arrow, $placement, '-16px', theme.colors.gray500)}
  }

  &::after {
    ${({ $arrow, $placement, theme }) =>
      getArrowStyle($arrow, $placement, '-15px', theme.colors.gray100)}
  }
`;

export const MenuItem = styled.div`
  padding: 5px 20px;

  :hover {
    background: ${({ theme }) => theme.colors.gray300};
  }
`;
