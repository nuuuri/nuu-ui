import { ButtonVariantType } from '../button/type';

export interface RadioOption {
  label: string;
  value?: string | number;
}

export type RadioOptionStyleType = 'radio' | 'button';

export type RadioButtonStyleType = Extract<
  ButtonVariantType,
  'solid' | 'outlined'
>;
