import PubSub from 'pubsub-js';
import StateContainer from 'utils/state_container';
import PlayerDirector from 'directors/player';
import UnitDirector from 'directors/unit';
import {
  DESELECT_TERRITORY_ALL,
  SELECT_TERRITORY_SELECTABLE,
  SELECT_TERRITORY_SELECTED,
  SELECTED_ACTION_MOVE,
  SELECTED_ACTION_PRODUCE,
  SELECTED_ACTION_TRADE,
  SELECTED_ACTION_BOLSTER,
  SELECTED_ACTION_UPGRADE,
  SELECTED_ACTION_DEPLOY,
  SELECTED_ACTION_BUILD,
  SELECTED_ACTION_ENLIST
} from 'enums/topics';

const state = new StateContainer({});

export default class ActionDirector {

  static init() {
    initializePlayerToStart();
    subscribeToSelectedActions();
    resetSteps();
  }

  static state() { return state.get(); }

}

function resetSteps() {
  state.set({
    onSelectableTerritoryClick: function(data) { },
    onSelectedTerritoryClick:   function(data) { }
  });
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
  _.each([
    { topic: SELECTED_ACTION_MOVE,    handler: onMove    },
    { topic: SELECTED_ACTION_PRODUCE, handler: onProduce },
    { topic: SELECTED_ACTION_TRADE,   handler: onTrade   },
    { topic: SELECTED_ACTION_BOLSTER, handler: onBolster },
    { topic: SELECTED_ACTION_UPGRADE, handler: onUpgrade },
    { topic: SELECTED_ACTION_DEPLOY,  handler: onDeploy  },
    { topic: SELECTED_ACTION_BUILD,   handler: onBuild   },
    { topic: SELECTED_ACTION_ENLIST,  handler: onEnlist  }
  ], function(o) {
    PubSub.subscribe(o.topic, function(msg, data) {
      beforeAction(o.handler, data);
    });
  });

  PubSub.subscribe(SELECT_TERRITORY_SELECTABLE, function(msg, data) {
    state.get().onSelectableTerritoryClick(data);
  });

  PubSub.subscribe(SELECT_TERRITORY_SELECTED, function(msg, data) {
    state.get().onSelectedTerritoryClick(data);
  });
}

function beforeAction(actionFunction, data) {
  resetSteps();
  PubSub.publishSync(DESELECT_TERRITORY_ALL, {});
  actionFunction(data);
}

function onMove(data) {
  console.log("Move");
}

function onProduce(data) {
  console.log("Produce");
  setWorkerTerritoriesSelectable();
  const onSelectableTerritoryClick = function(data) {
    console.log(data);
  };
  state.set({ onSelectableTerritoryClick: onSelectableTerritoryClick });
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

function setWorkerTerritoriesSelectable() {
  const playerState = state.get().currentPlayer.state.get();
  const territories = UnitDirector.workerTerritoriesFor(playerState.faction);
  _.each(territories, function(t) { t.state.set({ selectable: true }); });
}
