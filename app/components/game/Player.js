//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import Card from 'troir/app/components/game/Card'
import TuneMoveModal from 'troir/app/containers/game/TuneMoveModal'
import { getAvailablePlayers } from 'troir/app/utils/helpers'
import { Avatar } from 'troir/app/components/__shared/Common.style'
import { Container, Cards } from './Player.style'

export default class Player extends React.Component<*> {
  static propTypes = {
    player: pt.object.isRequired,
    currentState: pt.object.isRequired,
    toggleTuneMoveModal: pt.func.isRequired,
    applyMove: pt.func.isRequired,
  }

  pickCard(card: number) {
    const { toggleTuneMoveModal, applyMove, currentState } = this.props
    const availablePlayers = getAvailablePlayers(currentState, card)

    if ([4,7,8].includes(card)) {
      applyMove(card)
    } else if ([2,3,6].includes(card) && availablePlayers.length === 1) {
      applyMove(card, availablePlayers[0].num)
    } else {
      toggleTuneMoveModal(card)
    }
  }

  renderPlayerCard = (card: number, i: number) => {
    const { player, currentState } = this.props
    const show = player.num === 1 || player.showCardsTo.includes(1) || currentState.winner
    return <TouchableOpacity key={i} onPress={() => this.pickCard(card)} >
      <Card card={card} location='hand' show={show} />
    </TouchableOpacity>
  }

  render() {
    const { player, currentState } = this.props

    return <Container winner={currentState.winner === player.num} ring={player.ring}>
      <Avatar type={player.type} />
      <Cards>
        {player.hand.map(this.renderPlayerCard)}
        <TuneMoveModal />
      </Cards>
    </Container>
  }
}
