import PubSub from 'pubsub-js';
import StateContainer from 'utils/state_container';
import PlayerDirector from 'directors/player';
import UnitDirector from 'directors/unit';
import {
  SELECTED_ACTION_MOVE,
  SELECTED_ACTION_PRODUCE,
  SELECTED_ACTION_TRADE,
  SELECTED_ACTION_BOLSTER,
  SELECTED_ACTION_UPGRADE,
  SELECTED_ACTION_DEPLOY,
  SELECTED_ACTION_BUILD,
  SELECTED_ACTION_ENLIST
} from 'enums/topics';

const state = new StateContainer({
  
});

export default class ActionDirector {

  static init() {
    initializePlayerToStart();
    subscribeToSelectedActions();
  }

  static state() { return state.get(); }

}

function initializePlayerToStart() {
  const allPlayerState = PlayerDirector.state().players;
  let currentPlayerMat = Infinity;
  let currentPlayer = null;
  for (let id in allPlayerState) {
    const playerState = allPlayerState[id].state.get();
    if (playerState.playerMat < currentPlayerMat) {
      currentPlayer = allPlayerState[id];
      currentPlayerMat = playerState.playerMat;
    }
  }
  state.set({ currentPlayer: currentPlayer });
}

function subscribeToSelectedActions() {
  PubSub.subscribe(SELECTED_ACTION_MOVE,    function(msg, data) { onMove(data);    });
  PubSub.subscribe(SELECTED_ACTION_PRODUCE, function(msg, data) { onProduce(data); });
  PubSub.subscribe(SELECTED_ACTION_TRADE,   function(msg, data) { onTrade(data);   });
  PubSub.subscribe(SELECTED_ACTION_BOLSTER, function(msg, data) { onBolster(data); });
  PubSub.subscribe(SELECTED_ACTION_UPGRADE, function(msg, data) { onUpgrade(data); });
  PubSub.subscribe(SELECTED_ACTION_DEPLOY,  function(msg, data) { onDeploy(data);  });
  PubSub.subscribe(SELECTED_ACTION_BUILD,   function(msg, data) { onBuild(data);   });
  PubSub.subscribe(SELECTED_ACTION_ENLIST,  function(msg, data) { onEnlist(data);  });
}

function onMove(data) {
  console.log("Move");
}

function onProduce(data) {
  console.log("Produce");
  const playerState = state.get().currentPlayer.state.get();
  const workers = UnitDirector.workersFor(playerState.faction);
}

function onTrade(data) {
  console.log("Trade");
}

function onBolster(data) {
  console.log("Bolster");
}

function onUpgrade(data) {
  console.log("Upgrade");
}

function onDeploy(data) {
  console.log("Deploy");
}

function onBuild(data) {
  console.log("Build");
}

function onEnlist(data) {
  console.log("Enlist");
}
