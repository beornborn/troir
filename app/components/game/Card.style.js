//@flow
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { debug } from 'troir/app/components/__shared/Common.style'

const { height, width } = Dimensions.get('window')

const getRatio = (location: string) => {
  const scaleFactor = 7
  let sizeFactor = 1
  if (location === 'table') { sizeFactor = 0.98 }
  else if (location === 'hand') { sizeFactor = 0.45 }
  else if (location === 'picker') { sizeFactor = 0.75 }
  return sizeFactor / scaleFactor
}

export const Container = styled.View`
  height: ${props => 1.05 * height * getRatio(props.location)};
  width: ${props => width * getRatio(props.location)};
  align-items: center;
  justify-content: center;
  margin: ${props => props.location === 'table' ? 4 : 2}px;
  background-color: ${props => props.show ? '#ddd' : '#999'};
  ${debug}
`
