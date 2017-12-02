declare var console: any

type Action = {type: string, payload: Object}
type MethodType = 'GET' | 'POST' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PUT' | 'PATCH'
type Region = {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
}

declare module 'react-navigation' {
  declare module.exports: any;
}

declare module 'react-native' {
  declare module.exports: any;
}

// game

type Move = {
  card: number,
  targetPlayerNum: number,
  targetCard: number,
}

type PlayerType = 'user' | 'ai'

type Player = {
  num: number,
  type: PlayerType,
  hand: Array<number>,
  table: Array<number>,
  ring: boolean,
  lost: boolean,
  showCardsTo: Array<number>,
}

type Players = {
  '1': Player,
  '2': Player,
  '3'?: Player,
  '4'?: Player,
}

type GameState = {
  deck: Array<number>,
  openCards: Array<number>,
  hiddenCard: ?number,
  currentPlayer: number,
  players: Players,
  winner: ?number,
}
