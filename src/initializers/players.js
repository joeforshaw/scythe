import * as Factions from 'enums/factions';
import * as PlayerMats from 'enums/player_mats';
import PubSub from 'pubsub-js';
import StateStore from 'utils/state_store';
import Player from 'models/player';
import PlayerMat from 'models/player_mat';
import { shuffleArray, modelArrayToObject } from 'utils/helper';
import playerConfig from 'config/player';
import playerMatsConfig from 'config/player_mats';

export default class PlayersInitializer {

  createStore() {
    const players = initializePlayers();
    return new StateStore({
      playerMats:    initializePlayersMats(),
      players:       players,
      currentPlayer: initializeCurrentPlayer(players)
    });
  }

}

function initializePlayersMats() {
  const playersMats = [];
  for (let i = 0; i < PlayerMats.all.length; i++) {
    const initialState = playerMatsConfig.initial[PlayerMats.all[i]];
    initialState.playerMat = PlayerMats.all[i];
    const playerMat = new PlayerMat(initialState);
    playersMats.push(playerMat);
  }
  return modelArrayToObject(playersMats);
}

function initializePlayers() {
  const randomFactions = shuffleArray(Factions.all);
  const randomPlayerMats = shuffleArray(PlayerMats.all);
  const players = []
  for (let i = 0; i < randomFactions.length; i++) {
    const faction = randomFactions[i];
    const playerMat = randomPlayerMats[i];
    let playerState = { faction: faction, playerMat: playerMat };
    Object.assign(playerState, playerConfig.initial.faction[faction]);
    Object.assign(playerState, playerConfig.initial.playerMat[playerMat]);
    players.push(new Player(playerState));
  }
  return modelArrayToObject(players);
}

function initializeCurrentPlayer(players) {
  let currentPlayerMat = Infinity;
  let currentPlayer = null;
  for (let id in players) {
    const playerState = players[id].state.get();
    if (playerState.playerMat < currentPlayerMat) {
      currentPlayer = players[id];
      currentPlayerMat = playerState.playerMat;
    }
  }
  return currentPlayer;
}
