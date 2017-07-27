import PubSub from 'pubsub-js';
import StateContainer from 'utils/state_container';
import PlayerDirector from 'directors/player';
import UnitDirector from 'directors/unit';
import {
  DESELECT_TERRITORY_ALL,
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
  _.each([
    { topic: SELECTED_ACTION_MOVE,    action: onMove    },
    { topic: SELECTED_ACTION_PRODUCE, action: onProduce },
    { topic: SELECTED_ACTION_TRADE,   action: onTrade   },
    { topic: SELECTED_ACTION_BOLSTER, action: onBolster },
    { topic: SELECTED_ACTION_UPGRADE, action: onUpgrade },
    { topic: SELECTED_ACTION_DEPLOY,  action: onDeploy  },
    { topic: SELECTED_ACTION_BUILD,   action: onBuild   },
    { topic: SELECTED_ACTION_ENLIST,  action: onEnlist  }
  ], function(o) {
    PubSub.subscribe(o.topic, function(msg, data) {
      beforeAction(o.action, data);
    });
  });

  PubSub.subscribe(SELECT_TERRITORY_SELECTABLE, function(msg, data) {
    
  });

  PubSub.subscribe(SELECT_TERRITORY_SELECTED, function(msg, data) {
    
  });
}

function beforeAction(actionFunction, data) {
  PubSub.publishSync(DESELECT_TERRITORY_ALL, {});
  actionFunction(data);
}

function onMove(data) {
  console.log("Move");
}

function onProduce(data) {
  console.log("Produce");
  const playerState = state.get().currentPlayer.state.get();
  const territories = UnitDirector.workerTerritoriesFor(playerState.faction);
  _.each(territories, function(t) { t.state.set({ selectable: true }); });
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
