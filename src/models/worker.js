import Unit from 'models/unit';
import WorkerRenderer from 'renderers/worker';
import PubSub from 'pubsub-js';
import { WORKER } from 'enums/units';
import { CREATE_UNIT } from 'enums/topics';
import * as Territories from 'enums/territories';

export default class Worker extends Unit {
  
  constructor(state) {
    super({ renderer: WorkerRenderer, state: state });
    PubSub.publish(CREATE_UNIT, { type: WORKER, unit: this });

    // Can't move onto lakes
    this.addMoveRule(function(params) {
      return params.territoryState.type != Territories.LAKE;
    });

    // Can't move onto territories controlled by another player
    this.addMoveRule(function(params) {
      return true;
    });

    // Only nordic workers can cross rivers
  }

}
