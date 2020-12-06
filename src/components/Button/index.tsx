import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  disableShadow?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'default',
  size = 'md',
  variant,
  ...props
}) => {
  return (
    <Container type="button" className={`${variant} ${color}`} size={size} {...props}>
      {children ? children : 'Default'}
    </Container>
  );
};

export default Button;
