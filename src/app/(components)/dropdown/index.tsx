import { ReactNode, useCallback, useState } from 'react';

import * as S from './styled';
import { DropdownItem, DropdownPlacement } from './type';

interface DropdownProps {
  arrow?: boolean;
  children: ReactNode;
  items: DropdownItem[];
  placement?: DropdownPlacement;
}

export default function Dropdown({
  arrow = false,
  children,
  items,
  placement = 'bottomLeft',
}: DropdownProps) {
  const [opened, setOpened] = useState(false);

  const handleClickItem = useCallback(
    (onClick?: () => void) => () => {
      setOpened(false);

      if (onClick) {
        onClick();
      }
    },
    []
  );

  return (
    <S.Container
      onMouseOver={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}>
      {children}
      {opened && (
        <S.Menu $arrow={arrow} $placement={placement}>
          {items.map((item) => (
            <S.MenuItem key={item.key} onClick={handleClickItem(item.onClick)}>
              {item.label}
            </S.MenuItem>
          ))}
        </S.Menu>
      )}
    </S.Container>
  );
}
