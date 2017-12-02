//@flow
import React from 'react'
import pt from 'prop-types'
import { Modal, TouchableOpacity } from 'react-native'
import Card from 'troir/app/components/game/Card'
import { getAvailablePlayers } from 'troir/app/utils/helpers'
import { Avatar } from 'troir/app/components/__shared/Common.style'
import { Container, ActiveArea, Players, AvatarContainer, Cards, CardsRow, CardContainer } from './TuneMoveModal.style'

export default class TuneMoveModal extends React.Component<*, *> {
  static propTypes = {
    modal: pt.object.isRequired,
    gameState: pt.object.isRequired,
    toggleTuneMoveModal: pt.func.isRequired,
    applyMove: pt.func.isRequired,
  }

  state = {player: 0, card: 0}

  pick(stateUpdate: Object) {
    const { modal, applyMove, toggleTuneMoveModal, gameState } = this.props

    const availablePlayers = getAvailablePlayers(gameState, modal.card)
    let newUpdate = {...stateUpdate}
    if (availablePlayers.length === 1) {
      newUpdate = {...stateUpdate, player: availablePlayers[0].num}
    }

    this.setState(newUpdate, () => {
      const { player, card } = this.state
      if (player && (card || [5,6].includes(modal.card))) {
        applyMove(modal.card, player, card)
        toggleTuneMoveModal()
        this.setState({player: 0, card: 0})
      }
    })
  }

  renderPlayers() {
    const { gameState, modal } = this.props
    const availablePlayers = getAvailablePlayers(gameState, modal.card)

    if (availablePlayers.length === 1) {
      return null
    } else {
      return <Players>
        {availablePlayers.map(t =>
          <TouchableOpacity key={t.num} onPress={() => this.pick({player: t.num})}>
            <AvatarContainer selected={t.num === this.state.player}>
              <Avatar type={t.type} />
            </AvatarContainer>
          </TouchableOpacity>
        )}
      </Players>
    }
  }

  renderCards() {
    const { modal } = this.props

    if ([5,6].includes(modal.card)) {
      return null
    }

    const firstRow = modal.card === 1 ? [2,3,4] : [1,2,3,4]

    return <Cards>
      <CardsRow>
        {firstRow.map(card =>
          <TouchableOpacity key={card} onPress={() => this.pick({card})}>
            <CardContainer selected={card === this.state.card}>
              <Card card={card} location='picker' />
            </CardContainer>
          </TouchableOpacity>
        )}
      </CardsRow>
      <CardsRow>
        {[5,6,7,8].map(card =>
          <TouchableOpacity key={card} onPress={() => this.pick({card})}>
            <CardContainer selected={card === this.state.card}>
              <Card card={card} location='picker' />
            </CardContainer>
          </TouchableOpacity>
        )}
      </CardsRow>
    </Cards>
  }

  render() {
    const { modal } = this.props
    const { open } = modal

    return <Modal
      visible={open}
      transparent={true}
      animationType='none'
      onRequestClose={(q,w,e,r) => console.log('modal closed', q,w,e,r)} >
      <Container>
        <ActiveArea>
          {this.renderPlayers()}
          {this.renderCards()}
        </ActiveArea>
      </Container>
    </Modal>
  }
}
