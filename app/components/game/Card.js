//@flow
import React from 'react'
import pt from 'prop-types'
import { Text } from 'troir/app/components/__shared/Common.style'
import { Container } from './Card.style'

export default class Card extends React.Component<*> {
  static propTypes = {
    card: pt.number.isRequired,
    location: pt.string,
    show: pt.bool,
  }

  static defaultProps = {location: 'table', show: true}

  render() {
    const { card, location, show } = this.props

    return <Container location={location} show={show} >
      {show && <Text>{card}</Text>}
    </Container>
  }
}
