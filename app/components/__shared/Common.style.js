//@flow
import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Text = styled.Text`
  font-size: 16px;
`
export const debug = css`
  border-color: #000;
  border-width: 1px;
`

const getUri = (type: string) => {
  if (type === 'user') {
    return 'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg'
  } else {
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIYqr2B2Y60OmH9J67rcfkX1if4ERj3q2EA8g_JpoWz0I_LHi'
  }
}

export const Avatar = styled.Image.attrs({
  source: props => ({uri: getUri(props.type)})
})`
  width: ${width / 7};
  height: ${width / 7};
  borderRadius: ${width / 14};
`
