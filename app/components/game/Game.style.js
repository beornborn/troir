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
  align-items: center;
  height: ${height/5};
  width: ${width};
  background-color: #aaa;
  ${debug}
`
