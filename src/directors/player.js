import * as Factions from 'enums/factions';
import * as PlayerMats from 'enums/player_mats';
import PubSub from 'pubsub-js';
import StateContainer from 'utils/state_container';
import Player from 'models/player';
import PlayerMat from 'models/player_mat';
import { shuffleArray, modelArrayToObject } from 'utils/helper';
import playerConfig from 'config/player';
import playerMatsConfig from 'config/player_mats';

const state = new StateContainer({
  currentPlayer: {},
  playerMats: {},
  players: {}
});

export default class PlayerDirector {

  static init() {
    state.set({ playerMats: initializePlayersMats() });
    state.set({ players: initializePlayers() });
    state.set({ currentPlayer: initializeCurrentPlayer() });
  }

  static state() { return state.get(); }

}

function initializePlayersMats() {
  const playersMats = [];
  for (let i = 0; i < playerMatsConfig.initialAmounts.playersMat.length; i++) {
    const initialState = playerConfig.initialAmounts.playersMat[i];
    players.push(new PlayerMat(initialState));
  }
  return modelArrayToObject(players);
}

function initializePlayers() {
  const randomFactions = shuffleArray(Factions.all);
  const randomPlayerMats = shuffleArray(PlayerMats.all);
  const players = []
  for (let i = 0; i < randomFactions.length; i++) {
    const faction = randomFactions[i];
    const playerMat = randomPlayerMats[i];
    let playerState = { faction: faction, playerMat: playerMat };
    Object.assign(playerState, playerConfig.initialAmounts.faction[faction]);
    Object.assign(playerState, playerConfig.initialAmounts.playerMat[playerMat]);
    players.push(new Player(playerState));
  }
  return modelArrayToObject(players);
}

function initializeCurrentPlayer() {
  return {};
}