import { CSSProperties, MouseEventHandler } from 'react';

import * as S from './styled';
import { ButtonColorType, ButtonVariantType } from './type';

interface ButtonProps {
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  disabled?: boolean;
  children?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export default function Button({
  color = 'default',
  variant = 'outlined',
  disabled = false,
  children,
  onClick,
  style,
}: ButtonProps) {
  const props = {
    $color: color,
    disabled: disabled,
    onClick: onClick,
    style: style,
  };

  return {
    solid: <S.Solid {...props}>{children}</S.Solid>,
    outlined: <S.Outlined {...props}>{children}</S.Outlined>,
    dashed: <S.Dashed {...props}>{children}</S.Dashed>,
    filled: <S.Filled {...props}>{children}</S.Filled>,
  }[variant];
}
