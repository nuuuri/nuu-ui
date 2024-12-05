import {
  Children,
  isValidElement,
  ReactElement,
  useCallback,
  useEffect,
  useId,
  useState,
} from 'react';

import * as S from './styled';
import {
  RadioButtonStyleType,
  RadioOption,
  RadioOptionStyleType,
} from './type';

type RadioStyleProps =
  | {
      optionStyle?: Extract<RadioOptionStyleType, 'radio'>;
      buttonStyle?: never;
    }
  | {
      optionStyle: Extract<RadioOptionStyleType, 'button'>;
      buttonStyle?: RadioButtonStyleType;
    };

interface RadioProps {
  children: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (val: string | number) => void;
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
      onChange: (val: string | number) => void;
    };

type RadioGroupProps = BaseRadioGroupProps &
  RadioGroupOptionProps &
  RadioGroupValueProps &
  RadioStyleProps;

export default function Radio({
  buttonStyle,
  checked,
  children,
  disabled = false,
  name,
  onChange,
  optionStyle,
  value,
}: RadioProps & RadioStyleProps) {
  const id = useId();

  const handleClickRadio = useCallback(
    (e: any) => {
      e.preventDefault();

      if (onChange) {
        onChange(value || children);
        console.log('change selected');
      }
    },
    [value, children, onChange]
  );

  return (
    <S.RadioWrapper
      $active={!!checked}
      $buttonStyle={buttonStyle}
      $color="default"
      $disabled={disabled}
      $optionStyle={optionStyle}
      onClick={handleClickRadio}>
      <S.RadioInput
        $active={!!checked}
        $optionStyle={optionStyle}
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
  buttonStyle,
  children,
  legend,
  onChange,
  options,
  optionStyle,
  value,
}: RadioGroupProps) {
  const [selected, setSelected] = useState(value);
  const name = useId();

  const optionList: Required<RadioOption>[] = options
    ? options.map(({ label, value }) => ({ label, value: value || label }))
    : Children.toArray(children)
        .filter(isValidElement<RadioProps>)
        .map(({ props: { children, value } }) => ({
          label: children,
          value: value || children,
        }));

  useEffect(() => {
    if (selected && onChange) {
      onChange(selected);
    }
  }, [selected, onChange]);

  return (
    <S.RadioGroupWrapper>
      {legend && <legend>{legend}:</legend>}
      {optionList.map((option) =>
        optionStyle === 'button' ? (
          <Radio
            key={option.label}
            buttonStyle={buttonStyle}
            checked={option.value === selected}
            name={name}
            optionStyle="button"
            value={option.value}
            onChange={setSelected}>
            {option.label}
          </Radio>
        ) : (
          <Radio
            key={option.label}
            checked={option.value === selected}
            name={name}
            optionStyle={optionStyle}
            value={option.value}
            onChange={setSelected}>
            {option.label}
          </Radio>
        )
      )}
    </S.RadioGroupWrapper>
  );
}

Radio.Group = RadioGroup;
