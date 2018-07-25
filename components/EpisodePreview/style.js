// @flow
import styled from 'styled-components'
import { tint } from '../globals'

export const Grid = styled.div`
  margin-bottom: 32px;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  audio {
    display: block;
    margin-top: 16px;
    width: 100%;
  }
`

export const Title = styled.h5`
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.theme.text.default};
`

export const Timestamp = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.text.tertiary};
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.text.secondary};
  margin-top: 8px;
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${props => tint(props.theme.border.default, 3)};
  margin-top: 48px;
`