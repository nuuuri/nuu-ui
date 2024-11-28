import { css } from 'styled-components';

type DirectionType = 'row' | 'column';
type AlignType = 'left' | 'center' | 'right';

const Align: { [key in AlignType]: string } = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export const flexbox = (
  direction: DirectionType = 'row',
  justify: AlignType = 'center',
  align: AlignType = 'center'
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${Align[justify]};
  align-items: ${Align[align]};
`;
