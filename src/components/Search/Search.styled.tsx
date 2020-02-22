import styled from 'styled-components';

import { IApplicationTheme } from '../../shared/themes';

interface ITheme {
  theme: IApplicationTheme;
}

export const StyledSearch = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 60px;
    padding: 0 24px;
    background: ${({ theme }: ITheme) => theme.BASE_BACKGROUND};
    border: ${({ theme }: ITheme) => `1px solid ${theme.BORDER}`}; ;
    box-sizing: border-box;
    border-radius: 4px 4px 0px 0px;
    color: ${({ theme }: ITheme) => theme.BASE_TEXT};
    font-size: 20px;
    line-height: 23px;
    font-weight: bold;
    position: absolute;
    z-index: 1;

    &:focus {
      outline: none;
    }
  }
`;
