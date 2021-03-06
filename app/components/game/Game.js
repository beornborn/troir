//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import Deck from 'troir/app/components/game/Deck'
import Card from 'troir/app/components/game/Card'
import Player from 'troir/app/containers/game/Player'
import _ from 'lodash'
import { Container, Row, PlayAgain, TableCards } from './Game.style'

export default class Game extends React.Component<*> {
  static propTypes = {
    gameState: pt.object.isRequired,
    initGame: pt.func.isRequired,
  }

  componentDidMount() {
    this.props.initGame()
  }

  render() {
    const { gameState, initGame } = this.props
    const { deck, openCards, hiddenCard, players } = gameState

    return <Container>
      <Row centered={true}>
        <Deck leftCardsAmount={deck.length} />
        {openCards.map((card, i) =>
          <Card key={i} card={card} />
        )}
        {hiddenCard && <Card card={hiddenCard} show={false} />}
        <TouchableOpacity onPress={initGame}>
          <PlayAgain>Play Again</PlayAgain>
        </TouchableOpacity>
      </Row>
      {_.keys(players).map(playerNum =>
        <Row key={playerNum} twoLines={players[playerNum].table.length > 5}>
          <Player player={players[playerNum]} />
          <TableCards>
            {players[playerNum].table.map((card, i) =>
              <Card key={i} card={card} />
            )}
          </TableCards>
        </Row>
      )}
    </Container>
  }
}
