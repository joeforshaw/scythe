import PubSub from 'pubsub-js';
import StateContainer from 'utils/state_container';
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

const state = new StateContainer({});

export default class ActionDirector {

  static init() {
    PubSub.subscribe(SELECTED_ACTION_MOVE,    function(msg, data) { onMove(data); });
    PubSub.subscribe(SELECTED_ACTION_PRODUCE, function(msg, data) { onProduce(data); });
    PubSub.subscribe(SELECTED_ACTION_TRADE,   function(msg, data) { onTrade(data); });
    PubSub.subscribe(SELECTED_ACTION_BOLSTER, function(msg, data) { onBolster(data); });
    PubSub.subscribe(SELECTED_ACTION_UPGRADE, function(msg, data) { onUpgrade(data); });
    PubSub.subscribe(SELECTED_ACTION_DEPLOY,  function(msg, data) { onDeploy(data); });
    PubSub.subscribe(SELECTED_ACTION_BUILD,   function(msg, data) { onBuild(data); });
    PubSub.subscribe(SELECTED_ACTION_ENLIST,  function(msg, data) { onEnlist(data); });
  }

  static state() { return state.get(); }

}

function onMove(data) {
  console.log("Move");
}

function onProduce(data) {
  console.log("Produce");
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
