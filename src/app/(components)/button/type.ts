export type ButtonColorType = 'default' | 'primary' | 'danger';

export type ButtonVariantType = 'solid' | 'outlined' | 'dashed' | 'filled';

export const ButtonColorStyle: { [key in ButtonColorType]: string } = {
  default: 'gray',
  primary: 'blue',
  danger: 'red',
} as const;
