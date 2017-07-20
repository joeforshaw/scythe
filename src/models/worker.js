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
    this.addMoveRule(function(state, territory) {
      return territory.getState().type != Territories.LAKE;
    });

    // Only nordic workers can cross rivers
  }

}
