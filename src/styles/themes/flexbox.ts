import { CSSProperties } from 'react';

import { css } from 'styled-components';

export const flexbox = (
  direction: CSSProperties['flexDirection'],
  justify: CSSProperties['justifyContent'],
  align: CSSProperties['alignItems']
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;
