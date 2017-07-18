import Unit from 'models/unit';
import WorkerRenderer from 'renderers/worker';
import PubSub from 'pubsub-js';
import { WORKER } from 'enums/units';
import { CREATE_UNIT } from 'enums/topics';

export default class Worker extends Unit {
  
  constructor(state) {
    super({ renderer: WorkerRenderer, state: state });
    PubSub.publish(CREATE_UNIT, { type: WORKER, unit: this });
  }

}
