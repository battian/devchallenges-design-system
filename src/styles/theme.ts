export interface Theme {
  colors: {
    default: string;
    primary: string;
    danger: string;
    secondary: string;
    disabled: string;
    background: string;
    white: string;
    black: string;
    darkBlue: string;
    lightGray: string;
    gray: string;
  };
}

const theme = {
  colors: {
    default: '#E0E0E0',
    primary: '#2962FF',
    danger: '#D32F2F',
    secondary: '#455A64',
    disabled: '#E0E0E0',
    background: '#FAFBFD',
    white: '#FFFFFF',
    black: '#000000',
    darkBlue: '#090F31',
    lightGray: '#9E9E9E',
    gray: '#4F4F4F',
  },
};

export default theme;
