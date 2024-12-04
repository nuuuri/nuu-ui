import {
  Children,
  FormEventHandler,
  isValidElement,
  ReactElement,
  useId,
} from 'react';

import * as S from './styled';
import { RadioOption } from './type';

interface RadioProps {
  children: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string | number;
}

interface BaseRadioGroupProps {
  legend?: string;
}

/* discriminated union */
/**
 * `options`와 `children` 중 반드시 **하나만** 존재해야 함.
 * 둘 다 존재하거나 둘 다 존재하는 경우는 허용하지 않음.
 */
type RadioGroupOptionProps =
  | {
      options: RadioOption[];
      children?: never;
    }
  | {
      options?: never;
      children: ReactElement<RadioProps> | ReactElement<RadioProps>[];
    };

/**
 * `value`와 `onChange`가 반드시 **둘 다** 존재하거나 존재하지 않아야 함.
 * 하나만 존재하는 경우는 허용하지 않음.
 */
type RadioGroupValueProps =
  | {
      value?: undefined;
      onChange?: never;
    }
  | {
      value: string | number;
      onChange: FormEventHandler<HTMLFieldSetElement>;
    };

type RadioGroupProps = BaseRadioGroupProps &
  RadioGroupOptionProps &
  RadioGroupValueProps;

export default function Radio({
  checked,
  children,
  disabled = false,
  name,
  value,
}: RadioProps) {
  const id = useId();

  return (
    <S.RadioWrapper $disabled={disabled}>
      <S.RadioButton
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        value={value || children}
        onChange={() => {}}
      />
      <label htmlFor={id}>{children}</label>
    </S.RadioWrapper>
  );
}

function RadioGroup({
  children,
  legend,
  onChange,
  options,
  value,
}: RadioGroupProps) {
  const name = useId();

  const optionList: Required<RadioOption>[] = options
    ? options.map(({ label, value }) => ({ label, value: value || label }))
    : Children.toArray(children)
        .filter(isValidElement<RadioProps>)
        .map(({ props: { children, value } }) => ({
          label: children,
          value: value || children,
        }));

  return (
    <S.RadioGroupWrapper onChange={onChange}>
      {legend && <legend>{legend}:</legend>}
      {optionList.map((option) => (
        <Radio
          key={option.label}
          checked={value === undefined ? undefined : option.value === value}
          name={name}
          value={option.value}>
          {option.label}
        </Radio>
      ))}
    </S.RadioGroupWrapper>
  );
}

Radio.Group = RadioGroup;
