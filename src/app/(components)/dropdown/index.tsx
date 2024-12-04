import { ReactNode, useCallback, useState } from 'react';

import * as S from './styled';
import { DropdownItem, DropdownPlacementType } from './type';

interface DropdownProps {
  arrow?: boolean;
  children: ReactNode;
  items: DropdownItem[];
  placement?: DropdownPlacementType;
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
      onMouseLeave={() => setOpened(false)}
      onMouseOver={() => setOpened(true)}>
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
