import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

const boxShadow = '0px 2px 3px rgba(51, 51, 51, 0.2)';

enum sizes {
  sm = '6px 12px',
  md = '8px 16px',
  lg = '12px 22px',
}

type ButtonProps = {
  variant?: 'default' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  disableShadow?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
};

export const Container = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  background: ${props => props.theme.colors.default};
  border-radius: 6px;
  border: none;
  padding: ${props => (props.size ? sizes[props.size] : sizes.md)};
  color: ${props => props.theme.colors.gray};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.6px;
  box-shadow: ${props => (props.disableShadow ? 'none' : boxShadow)};
  transition: all 0.3s;

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      color: ${props => props.theme.colors.lightGray};
    `};

  &:hover,
  &:focus {
    background-color: ${props => shade(0.2, props.theme.colors.default)};
  }

  & > svg {
    color: inherit;
    font-size: 18px;
    margin-right: ${props => (props.leftIcon ? '8px' : 0)};
    margin-left: ${props => (props.rightIcon ? '8px' : 0)};
  }

  &.outline {
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    background: transparent;

    &:hover,
    &:focus {
      background-color: ${props => lighten(0.35, props.theme.colors.primary)};
    }
  }

  &.text {
    border: 1px solid transparent;
    color: ${props => props.theme.colors.primary};
    background: transparent;
    box-shadow: none;

    &:hover,
    &:focus {
      border: 1px solid ${props => props.theme.colors.primary};
      background-color: ${props => lighten(0.35, props.theme.colors.primary)};
    }

    ${props =>
      props.disabled &&
      css`
        color: ${props => props.theme.colors.lightGray};
      `};
  }

  &.primary {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};

    &:hover,
    &:focus {
      background-color: ${props => shade(0.2, props.theme.colors.primary)};
    }
  }

  &.secondary {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};

    &:hover,
    &:focus {
      background-color: ${props => shade(0.2, props.theme.colors.secondary)};
    }
  }

  &.danger {
    background: ${props => props.theme.colors.danger};
    color: ${props => props.theme.colors.white};

    &:hover,
    &:focus {
      background-color: ${props => shade(0.2, props.theme.colors.danger)};
    }
  }
`;
