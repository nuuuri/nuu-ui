import { ReactNode } from 'react';

export interface DropdownItem {
  key: string;
  label: string | ReactNode;
  onClick?: () => void;
}

export type DropdownPlacementType =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';
