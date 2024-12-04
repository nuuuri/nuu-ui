'use client';

import styled from 'styled-components';

import { ButtonColor, ButtonVariant } from './type';

import Button from '.';

import { flexbox } from '@/styles/themes/flexbox';

const Wrapper = styled.div`
  ${flexbox('column', 'center', 'left')}
  gap: 5px;
`;

const ButtonGroup = styled(Wrapper)`
  flex-direction: row;
`;

export default function ButtonPage() {
  const colors: ButtonColor[] = ['default', 'primary', 'danger'];
  const variants: ButtonVariant[] = ['solid', 'outlined', 'dashed', 'filled'];
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
