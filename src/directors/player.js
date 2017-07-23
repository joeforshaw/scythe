import * as Factions from 'enums/factions';
import * as FactionTypes from 'enums/faction_types';
import PubSub from 'pubsub-js';
import StateContainer from 'utils/state_container';
import Player from 'models/player';
import { shuffleArray } from 'utils/helper';

const state = new StateContainer({
  players: {}
});

export default class PlayerDirector {

  static init() {
    state.set({ players: initializePlayers() });
  }

  static state() {
    return state.get();
  }

}

function initializePlayers() {
  const randomFactions = shuffleArray(Factions.all);
  const randomFactionTypes = shuffleArray(FactionTypes.all);
  const playersList = []
  for (let i = 0; i < randomFactions.length; i++) {
    playersList.push(new Player({ faction: randomFactions[i], factionType: randomFactionTypes[i] }));
  }
  const players = {};
  for (let i = 0; i < playersList.length; i++) {
    players[playersList[i].id] = playersList[i];
  }
  console.log(players);
  return players;
}
