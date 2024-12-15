'use client';

import * as S from './styled';

interface StarRateProps {
  rate: number;
  maxRate?: number;
  width?: string;
  height?: string;
  showRate?: boolean;
  fontSize?: string;
}

export default function StarRate({
  rate,
  width = '16px',
  height = '16px',
  showRate = false,
  fontSize = '16px',
}: StarRateProps) {
  const calculateRate = (index: number) => {
    if (index === Math.floor(rate)) {
      return `${(rate - index) * 100}%`;
    }

    if (index < Math.floor(rate)) {
      return '100%';
    }

    return '0%';
  };

  return (
    <S.Container>
      {Array.from({ length: 5 }).map((_, idx) => (
        <S.StarWrapper key={idx} $height={height}>
          <S.DefaultStar $height={height} $width={width} />
          <S.RateStarWrapper $rate={calculateRate(idx)}>
            <S.RateStar $height={height} $width={width} />
          </S.RateStarWrapper>
        </S.StarWrapper>
      ))}
      {showRate && <S.RateText>{rate.toFixed(1)}</S.RateText>}
    </S.Container>
  );
}
