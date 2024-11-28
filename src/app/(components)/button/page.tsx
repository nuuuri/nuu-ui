'use client';

import { ButtonColor, ButtonVariant } from './type';

import Button from '.';

export default function ButtonPage() {
  const colors: ButtonColor[] = ['default', 'primary', 'danger'];
  const variants: ButtonVariant[] = ['solid', 'outlined', 'dashed', 'filled'];

  return (
    <div>
      {colors.map((color) => (
        <div key={color}>
          <h3>{color}</h3>
          {variants.map((variant) => (
            <Button
              key={`${color}-${variant}`}
              color={color}
              variant={variant}
              onClick={() => alert(`${color} ${variant} button clicked!`)}>
              {variant}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}
