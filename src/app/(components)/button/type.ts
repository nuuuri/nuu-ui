export type ButtonColor = 'default' | 'primary' | 'danger';

export type ButtonVariant = 'solid' | 'outlined' | 'dashed' | 'filled';

export const ButtonColorStyle: { [key in ButtonColor]: string } = {
  default: 'gray',
  primary: 'blue',
  danger: 'red',
} as const;
