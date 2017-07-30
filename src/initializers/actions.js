// import PubSub from 'pubsub-js';
// import StateStore from 'utils/state_store';
// import { WORKER } from 'enums/units';
// import * as Territories from 'enums/territories';
// import {
//   ACTIVITY,
//   DESELECT_TERRITORY_ALL,
//   SELECT_TERRITORY_SELECTABLE,
//   SELECT_TERRITORY_SELECTED,
//   SELECTED_ACTION_MOVE,
//   SELECTED_ACTION_PRODUCE,
//   SELECTED_ACTION_TRADE,
//   SELECTED_ACTION_BOLSTER,
//   SELECTED_ACTION_UPGRADE,
//   SELECTED_ACTION_DEPLOY,
//   SELECTED_ACTION_BUILD,
//   SELECTED_ACTION_ENLIST
// } from 'enums/topics';
// import ChooseProduceActivity from 'activities/produce/choose_produce';

// const state = new StateStore({
//   resources: {},
// });

// export default class ActionsInitializer {

//   constructor() {
//     subscribeToSelectedActions();
//     resetSteps();
//   }

//   state() { return state.get(); }

// }

// function resetSteps() {
//   state.set({
//     onSelectableTerritoryClick: function(data) { },
//     onSelectedTerritoryClick:   function(data) { }
//   });
// }

// function subscribeToSelectedActions() {
//   _.each([
//     { topic: SELECTED_ACTION_MOVE,    handler: onMove    },
//     { topic: SELECTED_ACTION_PRODUCE, handler: onProduce },
//     { topic: SELECTED_ACTION_TRADE,   handler: onTrade   },
//     { topic: SELECTED_ACTION_BOLSTER, handler: onBolster },
//     { topic: SELECTED_ACTION_UPGRADE, handler: onUpgrade },
//     { topic: SELECTED_ACTION_DEPLOY,  handler: onDeploy  },
//     { topic: SELECTED_ACTION_BUILD,   handler: onBuild   },
//     { topic: SELECTED_ACTION_ENLIST,  handler: onEnlist  }
//   ], function(o) {
//     PubSub.subscribe(o.topic, function(msg, data) {
//       beforeAction(o.handler, data);
//     });
//   });

//   PubSub.subscribe(SELECT_TERRITORY_SELECTABLE, function(msg, data) {
//     state.get().onSelectableTerritoryClick(data);
//   });

//   PubSub.subscribe(SELECT_TERRITORY_SELECTED, function(msg, data) {
//     state.get().onSelectedTerritoryClick(data);
//   });
// }

// function beforeAction(actionFunction, data) {
//   resetSteps();
//   PubSub.publishSync(DESELECT_TERRITORY_ALL, {});
//   actionFunction(data);
// }

// function onMove(data) {
//   console.log("Move");
// }

// function onProduce(data) {
//   console.log("Produce");
//   PubSub.publish(ACTIVITY, new ChooseProduceActivity());
// }

// function territorySelectedWhilstProducing(data) {
//   const territoryType = data.territoryState.type;
//   const workers = _.filter(data.units, function(u) {
//     return u.state.get().unitType == WORKER;
//   });
//   for (let id in workers) {
//     var resource = new resource();
//   }
// }

// function onTrade(data) {
//   console.log("Trade");
// }

// function onBolster(data) {
//   console.log("Bolster");
// }

// function onUpgrade(data) {
//   console.log("Upgrade");
// }

// function onDeploy(data) {
//   console.log("Deploy");
// }

// function onBuild(data) {
//   console.log("Build");
// }

// function onEnlist(data) {
//   console.log("Enlist");
// }

// function mapTerritoryTypeToResource(territoryType) {
//   switch (territoryType) {
//     case Territories.MOUNTAIN: return Resources.METAL;
//     case Territories.TUNDRA:   return Resources.OIL;
//     case Territories.FOREST:   return Resources.FOREST;
//     case Territories.FARM:     return Resources.FOOD;
//   }
//   return null;
// }
