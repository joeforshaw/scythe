import * as Factions from 'enums/factions';
import * as PlayerMats from 'enums/player_mats';
import PubSub from 'pubsub-js';
import StateContainer from 'utils/state_container';
import Player from 'models/player';
import { shuffleArray } from 'utils/helper';
import playerConfig from 'config/player';

const state = new StateContainer({
  playerMats: {},
  players: {}
});

export default class PlayerDirector {

  static init() {
    state.set({ playerMats: initializePlayersMats() });
    state.set({ players:    initializePlayers(playerMats) });
  }

  static state() {
    return state.get();
  }

}

function initializePlayersMats() {
  
}

function initializePlayers() {
  const randomFactions = shuffleArray(Factions.all);
  const randomPlayerMats = shuffleArray(PlayerMats.all);
  const playersList = []
  for (let i = 0; i < randomFactions.length; i++) {
    const faction = randomFactions[i];
    const playerMat = randomPlayerMats[i];
    let playerState = { faction: faction, playerMat: playerMat };
    Object.assign(playerState, playerConfig.initialAmounts.faction[faction]);
    Object.assign(playerState, playerConfig.initialAmounts.playerMat[playerMat]);
    playersList.push(new Player(playerState));
  }
  const players = {};
  for (let i = 0; i < playersList.length; i++) {
    players[playersList[i].id] = playersList[i];
  }
  return players;
}
