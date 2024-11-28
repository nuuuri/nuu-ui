import styled, { css, DefaultTheme, RuleSet } from 'styled-components';

import { ButtonColor, ButtonColorStyle } from './type';

import { colors } from '@/styles/themes/colors';

// getButtonColor('danger', 500) => red500
const getButtonColor = (color: ButtonColor, weight: number) =>
  (ButtonColorStyle[color] + weight) as keyof typeof colors;

const getButtonStyles = (
  theme: DefaultTheme,
  baseColor: keyof typeof colors,
  hoverColor: keyof typeof colors,
  activeColor: keyof typeof colors,
  additionalStyles?: RuleSet<object>
) => css`
  // default styles
  padding: 4px 8px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray1100};
  cursor: pointer;

  // custom styles
  border: 1px solid ${theme.colors[baseColor]};
  background: ${theme.colors[baseColor]};

  &:hover {
    background: ${theme.colors[hoverColor]};
  }
  &:active {
    background: ${theme.colors[activeColor]};
  }

  ${additionalStyles}
`;

export const Solid = styled.button<{ color: ButtonColor }>`
  ${({ theme, color }) => {
    if (color === 'default') return getButtonStyles(theme, 'gray1200', 'gray800', 'gray1200');
    else
      return getButtonStyles(
        theme,
        getButtonColor(color, 600),
        getButtonColor(color, 400),
        getButtonColor(color, 700)
      );
  }};

  color: ${({ theme }) => theme.colors.gray100};
`;

export const Filled = styled.button<{ color: ButtonColor }>`
  ${({ theme, color }) => {
    if (color === 'default') return getButtonStyles(theme, 'gray300', 'gray400', 'gray500');
    return getButtonStyles(
      theme,
      getButtonColor(color, 200),
      getButtonColor(color, 300),
      getButtonColor(color, 400)
    );
  }};
`;

export const Outlined = styled.button<{ color: ButtonColor }>`
  ${({ theme, color }) => {
    if (color === 'default')
      return getButtonStyles(
        theme,
        'gray500',
        'gray500',
        'gray700',
        css`
          &:hover {
            border: 1px solid ${theme.colors.blue500};
            color: ${theme.colors.blue500};
          }
          &:active {
            border: 1px solid ${theme.colors.blue700};
            color: ${theme.colors.blue700};
          }
        `
      );
    return getButtonStyles(
      theme,
      getButtonColor(color, 500),
      getButtonColor(color, 300),
      getButtonColor(color, 700),
      css`
        border: 1px solid ${theme.colors[getButtonColor(color, 500)]};
        color: ${theme.colors[getButtonColor(color, 500)]};
        &:hover {
          border: 1px solid ${theme.colors[getButtonColor(color, 300)]};
          color: ${theme.colors[getButtonColor(color, 300)]};
        }
        &:active {
          border: 1px solid ${theme.colors[getButtonColor(color, 300)]};
          color: ${theme.colors[getButtonColor(color, 700)]};
        }
      `
    );
  }};

  &,
  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.gray100};
  }
`;

export const Dashed = styled(Outlined)`
  &,
  &:hover,
  &:active {
    border-style: dashed;
  }
`;
