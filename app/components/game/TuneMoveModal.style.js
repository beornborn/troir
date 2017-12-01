//@flow
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { debug } from 'troir/app/components/__shared/Common.style'

const { height, width } = Dimensions.get('window')

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${height};
  width: ${width};
  ${debug}
`
export const ActiveArea = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${height / 1.5}px;
  width: ${width / 1.2}px;
  background-color: #ddd;
  opacity: 0.8;
  ${debug}
`
export const Players = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #777;
  margin: 20px;
  ${debug}
`
export const AvatarContainer = styled.View`
  padding: 15px;
  ${props => props.selected ? 'background-color: #0000b0;' : ''}
  ${debug}
`
export const Cards = styled.View`
  flex-direction: column;
  background-color: #777;
  margin: 20px;
  ${debug}
`
export const CardsRow = styled.View`
  flex-direction: row;
  justify-content: center;
  ${debug}
`
export const CardContainer = styled.View`
  padding: 15px;
  ${props => props.selected ? 'background-color: #0000b0;' : ''}
  ${debug}
`
