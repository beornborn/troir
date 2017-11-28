//@flow
import _ from 'lodash'
import { put, select } from 'redux-saga/effects'
import { setCurrentState } from 'troir/app/reducers/App'
import { getCurrentState } from 'troir/app/reducers/selectors/App'

const DecideMove = function* DecideMove(): Generator<*,*,*> {
  const state = yield select(getCurrentState)
  const handCards = state.players[state.currentPlayer].hand
  const availableChoice = handCards.filter(c => c !== 8) // don't lose treasure
  const dragonWithTrollGaz = availableChoice.includes(7) && (availableChoice.includes(5) || availableChoice.includes(6))
  const card = dragonWithTrollGaz ? 7 : _.sample(availableChoice)
  const players = _.values(state.players).filter(x => !x.lost)

  let targetPlayer
  switch (card) {
    case 1:
    case 2:
    case 3:
    case 6:
      targetPlayer = _.sample(players.filter(x => x.num !== state.currentPlayer))
      break
    case 4:
    case 7:
      break
    case 5:
      targetPlayer = _.sample(players)
      break
  }

  let targetCard
  if (card === 1) {
    targetCard = _.sample([2,3,4,5,6,7,8])
  }

  return { card, player: _.get(targetPlayer, 'num'), targetCard }
}

export default DecideMove



    // new_card = state[:deck].last
    // hand_cards = state[:players][player][:hand] + [new_card]
    // available_choice = hand_cards - [8] # don't lose treasure
    // dragon_with_troll_gaz = available_choice.include?(7) && (available_choice & [5,6]).present?
    // card = dragon_with_troll_gaz ? 7 : available_choice.sample

    // players = state[:players].keys
    // players = players.select {|p| !state[:players][p][:lost] }
    // target_player = case card
    // when 1,2,3,6
    //   (players - [player]).sample
    // when 4,7
    //   nil
    // when 5
    //   players.sample
    // end

    // target_card = case card
    // when 1
    //   (2..8).to_a.sample
    // else
    //   nil
    // end

    // [card, target_player, target_card, player, new_card]
