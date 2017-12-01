//@flow
import React from 'react'
import pt from 'prop-types'
import { Text } from 'troir/app/components/__shared/Common.style'
import { Container } from './Card.style'

export default class Deck extends React.Component<*> {
  static propTypes = {
    leftCardsAmount: pt.number.isRequired,
  }

  render() {
    const { leftCardsAmount } = this.props

    return <Container location='table'>
      <Text style={{textAlign: 'center'}}>
        {leftCardsAmount} cards
      </Text>
    </Container>
  }
}
