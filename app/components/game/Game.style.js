//@flow
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { debug } from 'troir/app/components/__shared/Common.style'

const { height, width } = Dimensions.get('window')

export const Container = styled.View`
  height: ${height};
  width: ${width};
  background-color: #fff;
  ${debug}
`
export const Row = styled.View`
  flex-direction: row;
  ${p => p.centered ? 'align-items: center;' : ''}
  height: ${p => (height / 5) * (p.twoLines ? 2 : 1)};
  width: ${width};
  background-color: #aaa;
  padding-top: 10px;
  ${debug}
`
export const PlayAgain = styled.Text`
  color: #2f8dff;
  width: 50px;
  margin-left: 20px;
`
export const TableCards = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 20px;
`
