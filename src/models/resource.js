import scythe from 'scythe';
import Model from 'models/model';
import ResourceRenderer from 'renderers/resource';
import PubSub from 'pubsub-js';

export default class Resource extends Model {
  
  constructor(state) {
    super({ renderer: ResourceRenderer, state: state });
  }

}
