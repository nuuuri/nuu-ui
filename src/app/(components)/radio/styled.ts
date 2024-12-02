import styled from 'styled-components';

import { flexbox } from '@/styles/themes/flexbox';

export const RadioWrapper = styled.div<{ $disabled: boolean }>`
  ${flexbox('row', 'left', 'center')}

  * {
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  }

  label {
    padding: 0 10px;
    color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.gray600 : theme.colors.gray1300};
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const RadioGroupWrapper = styled.fieldset`
  ${flexbox('row', 'left', 'center')}
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

export const RadioButton = styled.input.attrs(() => ({
  type: 'radio',
}))`
  position: relative;
  appearance: none;
  width: 16px;
  height: 16px;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: 50%;

  &:checked {
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
  }
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
