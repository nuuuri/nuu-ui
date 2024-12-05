import styled, { css } from 'styled-components';

import { Outlined } from '../button/styled';

import { RadioButtonStyleType, RadioOptionStyleType } from './type';

import { flexbox } from '@/styles/themes/flexbox';

export const RadioWrapper = styled(Outlined).attrs(() => ({ as: 'div' }))<{
  $active: boolean;
  $disabled: boolean;
  $buttonStyle?: RadioButtonStyleType;
  $optionStyle?: RadioOptionStyleType;
}>`
  ${flexbox('row', 'flex-start', 'center')}

  * {
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  }

  label {
    padding: 0 10px;
    color: ${({ theme, $active, $disabled }) =>
      $active
        ? theme.colors.gray100
        : $disabled
          ? theme.colors.gray600
          : theme.colors.gray1300};
    font-size: 14px;
    line-height: 1.5;
  }

  ${({ $optionStyle, $active, theme }) => {
    // radio style
    if (!$optionStyle || $optionStyle === 'radio') {
      return css`
        &,
        &:hover,
        &:active {
          border: none;
        }
      `;
    }

    // button Style
    return css`
      &,
      &:hover,
      &:active {
        margin-left: -1px;
        border-radius: 0;
        border-color: ${$active && theme.colors.blue600};
        background: ${$active ? theme.colors.blue600 : theme.colors.gray100};
        z-index: ${$active && 2};
      }

      &:hover {
        z-index: 1;
      }

      &:first-child {
        margin-left: 0;
        border-start-start-radius: 6px;
        border-end-start-radius: 6px;
      }
      &:last-child {
        border-start-end-radius: 6px;
        border-end-end-radius: 6px;
      }
    `;
  }}
`;

export const RadioGroupWrapper = styled.fieldset`
  ${flexbox('row', 'flex-start', 'center')}
  border: none;
  margin: 0;
  padding: 0;

  legend {
    margin-bottom: 10px;
    padding: 0;
    color: ${({ theme }) => theme.colors.blue600};
    font-weight: 600;
    font-size: 18px;
  }
`;

export const RadioInput = styled.input.attrs(() => ({
  type: 'radio',
}))<{
  $active: boolean;
  $optionStyle?: RadioOptionStyleType;
}>`
  display: ${({ $optionStyle }) =>
    $optionStyle === 'button' ? 'none' : 'inline-block'};
  position: relative;
  appearance: none;
  width: 16px;
  height: 16px;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: 50%;

  ${({ $active }) =>
    $active &&
    css`
      border: none;
      background: ${({ theme }) => theme.colors.blue600};

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.gray100};
        content: '';
      }
    `}

  &:disabled {
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    background: ${({ theme }) => theme.colors.gray200};

    &::before {
      width: 8px;
      height: 8px;
      background: ${({ theme }) => theme.colors.gray600};
    }
  }
`;
