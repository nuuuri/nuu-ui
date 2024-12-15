import { FaStar } from 'react-icons/fa';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
`;

export const StarWrapper = styled.div<{ $height: string }>`
  position: relative;
  height: ${({ $height }) => $height ?? '16px'};
`;

export const DefaultStar = styled(FaStar)<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width ?? '16px'};
  height: ${({ $height }) => $height ?? '16px'};
  color: ${({ theme }) => theme.colors.gray400};
`;

export const RateStarWrapper = styled.span<{
  $rate: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $rate }) => $rate};
  overflow: hidden;
`;

export const RateStar = styled(DefaultStar)`
  color: ${({ theme }) => theme.colors.yellow600};
`;

export const RateText = styled.span`
  margin-left: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 0;
`;
