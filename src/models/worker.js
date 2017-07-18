import Model from 'models/model';
import WorkerRenderer from 'renderers/worker';
import PubSub from 'pubsub-js';
import { WORKER } from 'enums/units';
import { UNIT_CREATE } from 'enums/topics';

export default class Worker extends Model {
  
  constructor(state) {
    super({ renderer: WorkerRenderer, state: state });
    PubSub.publish(Topics.UNIT_CREATE, { type: WORKER, unit: this });
  }

}
