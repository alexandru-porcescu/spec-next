// @flow
import styled from 'styled-components'
import { theme } from '../theme'

export const Dismiss = styled.button`
  display: flex;
  width: 18px;
  height: 18px;
  background: none;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  color: ${theme.text.tertiary};
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background: ${theme.text.tertiary};
    color: ${theme.bg.default};
  }

  i {
    position: relative;
    top: -1px;
    font-style: normal;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
  }

  @media (max-width: 968px) {
    position: absolute;
    top: 16px;
    right: 16px; 
  }
`