import React, {
  ComponentType,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from 'react';

import { Container } from './styles';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    TextareaHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  error?: boolean;
  icon?: ComponentType;
  endIcon?: boolean;
  smallSize?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  multiline?: boolean;
  row?: number;
}

const Input: React.FC<InputProps> = ({
  disabled,
  label,
  error,
  icon: Icon,
  endIcon = false,
  smallSize = false,
  fullWidth,
  helperText,
  multiline,
  row = 4,
  ...props
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <Container
      disabled={disabled}
      focus={focus}
      smallSize={smallSize}
      error={error}
      fullWidth={fullWidth}
      endIcon={endIcon}
    >
      <label>{label}</label>
      <div className="input__container">
        {Icon && !endIcon && <Icon />}

        {multiline ? (
          <textarea
            rows={row}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        ) : (
          <input
            type="text"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            {...props}
          />
        )}

        {Icon && endIcon && <Icon />}
      </div>
      <span>{helperText}</span>
    </Container>
  );
};

export default Input;
