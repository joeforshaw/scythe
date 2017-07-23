import Unit from 'models/unit';
import WorkerRenderer from 'renderers/worker';
import PubSub from 'pubsub-js';
import { WORKER } from 'enums/units';
import { CREATE_UNIT } from 'enums/topics';
import { NORDIC } from 'enums/factions';
import * as Territories from 'enums/territories';

export default class Worker extends Unit {
  
  constructor(state) {
    super({ renderer: WorkerRenderer, state: state });
    PubSub.publish(CREATE_UNIT, { type: WORKER, unit: this });
    addMoveRules(this);
  }

}

function addMoveRules(worker) {
  
  // Can't move onto lakes
  worker.addMoveRule(function(params) {
    return params.territoryState.type != Territories.LAKE;
  });

  // Can't move onto territories controlled by another player
  worker.addMoveRule(function(params) {
    for (let id in params.territoryState.units) {
      const otherUnitState = params.territoryState.units[id].state.get();
      if (params.unitState.faction != otherUnitState.faction) { return false; }
    }
    return true;
  });

  // Only nordic workers can cross rivers
  worker.addMoveRule(function(params) {
    const workerState = worker.state.get();
    if (workerState.faction == NORDIC) { return true; }
    const currentTerritoryState = workerState.territory.state.get();
    if (!currentTerritoryState.rivers) { return true; }
    return currentTerritoryState.rivers.indexOf(params.side) < 0; 
  });
}
