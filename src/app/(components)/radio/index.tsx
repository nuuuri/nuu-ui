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

type RadioGroupProps = BaseRadioGroupProps &
  (
    | {
        value?: undefined;
        onChange?: never;
      }
    | {
        value: string | number;
        onChange: FormEventHandler<HTMLFieldSetElement>;
      }
  ) &
  (
    | {
        options: RadioOption[];
        children?: never;
      }
    | {
        options?: never;
        children: ReactElement<RadioProps> | ReactElement<RadioProps>[];
      }
  );

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

function RadioOptions({
  options,
  name,
  value,
}: Pick<RadioProps, 'name'> & Pick<RadioGroupProps, 'options' | 'value'>) {
  return options?.map((option) => (
    <Radio
      key={option.label}
      checked={
        value === undefined
          ? value
          : String(option.value || option.label) === String(value)
      }
      name={name}
      value={option.value || option.label}>
      {option.label}
    </Radio>
  ));
}

function RadioChildren({
  children,
  value,
}: Pick<RadioProps, 'name'> & Pick<RadioGroupProps, 'children' | 'value'>) {
  return Children.map(
    children,
    (child) =>
      isValidElement(child) && (
        <Radio
          {...child.props}
          checked={
            value === undefined
              ? undefined
              : String(child.props.value || child.props.children) ===
                String(value)
          }
        />
      )
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

  return (
    <S.RadioGroupWrapper onChange={onChange}>
      {legend && <legend>{legend}:</legend>}
      {options ? (
        <RadioOptions name={name} options={options} value={value} />
      ) : (
        <RadioChildren name={name} value={value}>
          {children}
        </RadioChildren>
      )}
    </S.RadioGroupWrapper>
  );
}

Radio.Group = RadioGroup;
