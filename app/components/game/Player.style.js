//@flow
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { debug } from 'troir/app/components/__shared/Common.style'

const { height, width } = Dimensions.get('window')

const getBackgroundColor = (winner: boolean, ring: boolean) => {
  if (winner) {
    return '#00ff00'
  } else if (ring) {
    return '#0000ff'
  }
  return '#555'
}

export const Container = styled.View`
  background-color: ${p => getBackgroundColor(p.winner, p.ring)};
  margin: 5px;
  ${debug}
`
export const Cards = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
