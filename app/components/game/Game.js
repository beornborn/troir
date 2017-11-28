//@flow
import React from 'react'
import pt from 'prop-types'
import { View, Modal } from 'react-native'
import Deck from 'troir/app/components/game/Deck'
import Card from 'troir/app/components/game/Card'
import Player from 'troir/app/containers/game/Player'
import _ from 'lodash'
import { Text } from 'troir/app/components/__shared/Common.style'
import { Container, Row } from './Game.style'

export default class Game extends React.Component<*> {
  static propTypes = {
    currentState: pt.object.isRequired,
    initGame: pt.func.isRequired,
  }

  componentDidMount() {
    this.props.initGame()
  }

  render() {
    const { currentState } = this.props
    const { deck, openCards, hiddenCard, players } = currentState

    return <Container>
      <Row>
        <Deck leftCardsAmount={deck.length} />
        {openCards.map((card, i) =>
          <Card key={i} card={card} />
        )}
        <Card card={hiddenCard} show={false} />
      </Row>
      {_.keys(players).map(playerNum =>
        <Row key={playerNum}>
          <Player player={players[playerNum]} />
          {players[playerNum].table.map((card, i) =>
            <Card key={i} card={card} />
          )}
        </Row>
      )}
    </Container>
  }
}
