'use client';

import styled from 'styled-components';

import { ButtonColorType, ButtonVariantType } from './type';

import Button from '.';

import { flexbox } from '@/styles/themes/flexbox';

const Wrapper = styled.div`
  ${flexbox('column', 'center', 'flex-start')}
  gap: 5px;
`;

const ButtonGroup = styled(Wrapper)`
  flex-direction: row;
`;

export default function ButtonPage() {
  const colors: ButtonColorType[] = ['default', 'primary', 'danger'];
  const variants: ButtonVariantType[] = [
    'solid',
    'outlined',
    'dashed',
    'filled',
  ];
  const disables: boolean[] = [false, true];

  return (
    <div>
      {colors.map((color) => (
        <Wrapper key={color}>
          <h3>{color}</h3>
          {disables.map((disabled) => (
            <ButtonGroup key={`${color}-${disabled}`}>
              {variants.map((variant) => (
                <Button
                  key={`${color}-${variant}-${disabled}`}
                  color={color}
                  disabled={disabled}
                  variant={variant}
                  onClick={() => alert(`${color} ${variant} button clicked!`)}>
                  {variant}
                </Button>
              ))}
            </ButtonGroup>
          ))}
        </Wrapper>
      ))}
    </div>
  );
}
