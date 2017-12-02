//@flow
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { debug } from 'troir/app/components/__shared/Common.style'

const getBackgroundColor = (winner: boolean, ring: boolean) => {
  if (winner) {
    return '#00ff00'
  } else if (ring) {
    return '#0000ff'
  }
  return '#555'
}

const { height } = Dimensions.get('window')

export const Container = styled.View`
  background-color: ${p => getBackgroundColor(p.winner, p.ring)};
  margin: 5px;
  height: ${height / 6.2}px;
  ${debug}
`
export const Cards = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
