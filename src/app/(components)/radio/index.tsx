import * as S from './styled';

interface RadioProps {
  children?: string;
}

export default function Radio({ children }: RadioProps) {
  return (
    <S.RadioWrapper>
      <S.RadioButton id="radio" />
      <label htmlFor="radio">{children}</label>
    </S.RadioWrapper>
  );
}
