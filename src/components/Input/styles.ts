import styled, { css } from 'styled-components';

interface ContainerProps {
  disabled?: boolean;
  error?: boolean;
  focus: boolean;
  smallSize?: boolean;
  fullWidth?: boolean;
  endIcon?: boolean;
}

export const Container = styled.div<ContainerProps>`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${props =>
    props.error ? props.theme.colors.danger : props.theme.colors.blackAlt};

  label {
    display: block;
    font-size: 12px;
    margin-bottom: 4px;
  }

  span {
    margin-top: 4px;
    font-size: 12px;
    color: ${props => props.theme.colors.grayAlt};

    ${props =>
      props.error &&
      css`
        color: ${props => props.theme.colors.danger};
      `};
  }

  .input__container {
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.grayAlt};
    color: ${props => props.theme.colors.grayAlt};
    border-radius: 8px;
    padding: ${props => (props.smallSize ? '8px 12px' : '12px 14px')};
    font-size: 14px;
    width: ${props => (props.fullWidth ? '100%' : '200px')};
    font-weight: 500;

    ${props =>
      props.focus &&
      css`
        border-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
      `};

    ${props =>
      props.error &&
      css`
        border-color: ${props => props.theme.colors.danger};
        color: ${props => props.theme.colors.danger};
      `};

    ${props =>
      props.disabled &&
      css`
        pointer-events: none;
        background-color: ${props => props.theme.colors.disabledColor};
        border-color: ${props => props.theme.colors.disabled};
        color: ${props => props.theme.colors.disabled};
      `};

    input,
    textarea {
      flex: 1;
      background: transparent;
      border: 0;
      color: #f4ede8;
      color: ${props => props.theme.colors.gray};
      outline: none;
    }

    textarea {
      resize: none;
    }

    svg {
      margin-right: 8px;
      font-size: 20px;

      ${props =>
        props.endIcon &&
        css`
          margin: 0 0 0 8px;
        `};
    }
  }
`;
